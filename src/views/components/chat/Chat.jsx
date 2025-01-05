import React, {useMemo} from 'react';
import {View, Text, Dimensions} from 'react-native';
import useKeyboardOffsetHeight from '../../../helpers/useKeyboardOffsetHeight';
import getMessageHeightOffset from '../../../helpers/getMessageHeightOffset';
import {FlashList} from '@shopify/flash-list';
import MessageBubble from '../bubble/MessageBubble';
import EmptyComponent from '../empty/EmptyComponent';

const windowHeight = Dimensions.get('window').height;

const Chat = ({isTyping, messages, heightOfMessageBox}) => {
  const keyBoardOffsetHeight = useKeyboardOffsetHeight();

  const calculatedHeight = useMemo(() => {
    return (
      windowHeight * 0.76 -
      keyBoardOffsetHeight * 0.95 -
      getMessageHeightOffset(heightOfMessageBox, windowHeight)
    );
  }, [windowHeight, keyBoardOffsetHeight, heightOfMessageBox]);

  const renderMessageBubble = ({item}) => {
    return <MessageBubble message={item} />;
  };
  return (
    <View
      style={{
        height: calculatedHeight,
      }}>
      {messages?.length == 0 ? (
        <EmptyComponent isTyping={isTyping} />
      ) : (
        <FlashList
          indicatorStyle="black"
          data={[...messages].reverse()}
          inverted
          estimatedItemSize={40}
          renderItem={renderMessageBubble}
        />
      )}
    </View>
  );
};

export default Chat;
