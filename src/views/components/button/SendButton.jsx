import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Platform, TextInput} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import useKeyboardOffsetHeight from '../../../helpers/useKeyboardOffsetHeight';

const windowHeight = Dimensions.get('window').height;

const SendButton = () => {
  const [message, setMessage] = useState('');
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const handleTextChange = text => {
    setMessage(text);
  };

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
        <View style={[styles.inputContainer]}>
          <TextInput
            editable
            multiline
            style={styles.textInput}
            placeholder="Message"
            onChangeText={handleTextChange}
          />
        </View>
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
});

export default SendButton;
