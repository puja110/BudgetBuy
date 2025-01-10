import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  TextInput,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import useKeyboardOffsetHeight from '../../../helpers/useKeyboardOffsetHeight';
import {useDispatch, useSelector} from 'react-redux';
import {
  addAssistantMessage,
  addMessage,
  createNewChat,
  markMessageAsRead,
  selectChats,
  selectCurrentChatId,
  updateAssistantMessage,
  updateChatSummary,
} from '../../../redux/reducers/chatSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import uuid from 'react-native-uuid';
import {HUGGING_API_KEY, HUGGING_API_URL} from '../../../redux/API';

const windowHeight = Dimensions.get('window').height;

const SendButton = ({
  isTyping,
  setIsTyping,
  setCurrentChatId,
  length,
  setHeightOfMessageBox,
  messages,
}) => {
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const currentChatId = useSelector(selectCurrentChatId);
  const animationValue = useRef(new Animated.Value(0)).current;
  const TextInputRef = useRef(null);
  const [message, setMessage] = useState('');
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const handleTextChange = text => {
    setIsTyping(!!text);
    setMessage(text);
  };

  const handleContentSizeChange = event => {
    setHeightOfMessageBox(event.nativeEvent.contentSize.height);
  };

  const fetchResponse = async (mes, selectedChatId) => {
    console.log('mes: ', mes.content);
    let id = length + 2;
    dispatch(
      addAssistantMessage({
        chatId: selectedChatId,
        message: {
          content: 'Loading...',
          time: mes.time,
          role: 'assistant',
          id: id,
        },
      }),
    );

    try {
      const response = await fetch(HUGGING_API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${HUGGING_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: mes.content,
          messages: [...messages, mes],
        }),
      });

      const data = await response.json();

      dispatch(
        updateAssistantMessage({
          chatId: selectedChatId,
          message: {
            isLoading: false,
            content: data[0].generated_text || 'Opps! Something went wrong.',
            time: new Date().toString(),
            role: 'assistant',
            id: id,
          },
          messageId: id,
        }),
      );
    } catch (error) {
      console.error('Error fetching model response:', error);
    }
  };

  const generateImage = async (mes, selectedChatId) => {};

  const identifyImageApi = prompt => {
    const imageRegex = /\b(generate\s*image|imagine)\b/i;
    if (imageRegex.test(prompt)) {
      return true;
    } else {
      return false;
    }
  };

  const addChat = async newId => {
    let selectedChatId = newId ? newId : currentChatId;
    let messageId = length + 1;

    if (length == 0 && message.trim().length > 0) {
      await dispatch(
        updateChatSummary({
          chatId: selectedChatId,
          summary: message?.trim().slice(0, 40),
        }),
      );
    }

    await dispatch(
      addMessage({
        chatId: selectedChatId,
        message: {
          content: message,
          time: new Date().toISOString(),
          role: 'user',
          id: messageId,
          isMessageRead: false,
          isLoading: false,
          // imageUri: 'https://www.gstatic.com/webp/gallery/1.jpg',
        },
      }),
    );

    setMessage('');
    // Comment if you don't want keybard dismiss
    TextInputRef.current.blur();
    setIsTyping(false);

    let promptForAssistant = {
      content: message,
      time: new Date().toString(),
      role: 'user',
      id: messageId,
      isMessageRead: false,
    };

    if (!identifyImageApi(message)) {
      fetchResponse(promptForAssistant, selectedChatId);
    } else {
      generateImage(promptForAssistant, selectedChatId);
    }

    dispatch(
      markMessageAsRead({
        chatId: selectedChatId,
        messageId: messageId,
      }),
    );
  };

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: isTyping ? 1 : 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [isTyping]);

  const sendButtonStyle = {
    opacity: animationValue,
    transform: [
      {
        scale: animationValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1],
        }),
      },
    ],
  };

  const sendIcon = <Icon name="send-sharp" size={RFValue(20)} color="white" />;

  return (
    <View
      style={[
        styles.container,
        {
          bottom:
            Platform.OS === 'android'
              ? windowHeight * 0.02
              : Math.max(keyboardOffsetHeight, windowHeight * 0.02),
        },
      ]}>
      <View style={styles.subContainer}>
        <View
          style={[styles.inputContainer, {width: isTyping ? '87%' : '100%'}]}>
          <TextInput
            editable
            ref={TextInputRef}
            multiline
            value={message}
            style={styles.textInput}
            placeholder="Message"
            onChangeText={handleTextChange}
            onContentSizeChange={handleContentSizeChange}
          />
        </View>
        {isTyping && (
          <Animated.View style={[styles.sendButtonWrapper, sendButtonStyle]}>
            <TouchableOpacity
              style={styles.sendButton}
              onPress={async () => {
                const chatIndex = chats.findIndex(
                  chat => chat.id == currentChatId,
                );
                if (chatIndex !== -1) {
                  // OR if(currentChatId) {
                  await addChat(currentChatId); // Add the new message to the current chat
                } else {
                  let newId = uuid.v4();
                  setCurrentChatId(newId);
                  await dispatch(
                    createNewChat({
                      chatId: newId,
                      messages: [],
                      summary: 'New Chat',
                    }),
                  );

                  addChat(newId);
                  return;
                }
              }}>
              {sendIcon}
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: windowHeight * 0.09,
    paddingHorizontal: '1%',
    padding: 10,
    Position: 'absolute',
    left: 0,
    right: 0,
    width: '98%',
    alignContent: 'center',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  inputContainer: {
    maxHeight: windowHeight * 0.2,
    backgroundColor: '#232626',
    margin: '1%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '1%',
    borderRadius: 20,
  },
  textInput: {
    width: '98%',
    padding: 10,
    marginHorizontal: '2%',
    fontSize: RFValue(13),
    color: 'white',
  },
  sendButtonWrapper: {
    position: 'absolute',
    right: 0,
    bottom: 6,
    width: '11%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  sendButton: {
    backgroundColor: '#22c063',
    borderRadius: 42,
    height: 42,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SendButton;
