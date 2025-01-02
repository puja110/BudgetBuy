import React, {useState} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import WABG from '../../../assets/w_bg.png';
import BudgetBotHeader from '../../components/header/ChatHeader';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeCurrentChatId,
  selectChats,
  selectCurrentChatId,
} from '../../../redux/reducers/chatSlice';
import SendButton from '../../components/button/SendButton';

const MetaAI = () => {
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);
  const currentChatId = useSelector(selectCurrentChatId);
  const [isTyping, setIsTyping] = useState(false);
  const [heightOfMessageBox, setHeightOfMessageBox] = useState(0);

  const setCurrentChatId = id => {
    dispatch(changeCurrentChatId({chatId: id}));
  };

  console.log('chats:: ', chats);

  return (
    <ImageBackground source={WABG} style={styles.container} resizeMode="cover">
      <BudgetBotHeader />
      <View style={styles.contentContainer}>
        <SendButton
          isTyping={isTyping}
          setHeightOfMessageBox={setHeightOfMessageBox}
          heightOfMessageBox={heightOfMessageBox}
          setIsTyping={setIsTyping}
          currentChatId={currentChatId}
          setCurrentChatId={id => setCurrentChatId(id)}
          length={
            chats?.find(chat => chat.id == currentChatId)?.messages?.length ||
            [].length
          }
          messages={
            chats?.find(chat => chat.id == currentChatId)?.messages || []
          }
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default MetaAI;
