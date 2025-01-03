import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

const MessageBubble = ({message}) => {
  const isMyMessage = message.role == 'user';
  const isMessageRead = message?.isMessageRead;
  return (
    <View
      style={{
        ...styles.messageContainer,
        maxWidth: isMyMessage ? '80%' : '92%',
        alignSelf: isMyMessage ? 'flex-end' : 'flex-start',
        backgroundColor: isMyMessage ? '#154d37' : '#232626',
        borderTopEndRadius: isMyMessage ? 5 : 0,
        borderTopRightRadius: isMyMessage ? 0 : 5,
      }}>
      {!isMyMessage && (
        <View
          style={{
            display: isMyMessage ? 'none' : 'flex',
          }}
        />
      )}

      <Text style={{...styles.messageText}}>{message.content}</Text>

      {isMyMessage && (
        <View
          style={{
            ...styles.rightMessageArrow,
            display: isMyMessage ? 'flex' : 'none',
          }}
        />
      )}

      <View style={{...styles.timeAndReadContainer, right: 0}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    minWidth: '24%',
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 10,
    borderRadius: 10,
  },
  messageText: {
    fontSize: RFValue(11.4),
    color: 'white',
    marginBottom: 15,
    marginRight: 15,
  },
  leftMessageArrow: {
    height: 0,
    width: 0,
    borderLeftWidth: 10,
    borderLeftColor: 'transparent',
    borderTopColor: '#232626',
    borderTopWidth: 10,
    alignSelf: 'flex-start',
    borderRightColor: 'black',
    right: 10,
    bottom: 0,
  },
  rightMessageArrow: {
    height: 0,
    position: 'absolute',
    width: 0,
    borderBlockColor: 'transparent',
    borderTopColor: '#154d37',
    borderTopWidth: 10,
    alignSelf: 'flex-start',
    right: 0,
    top: 0,
  },
  timeAndReadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 4,
    position: 'absolute',
    paddingHorizontal: 10,
    gap: 2,
  },
  timeText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#8aa69b',
  },
});

export default MessageBubble;
