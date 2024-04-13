import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
};

type ForgotPasswordScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface ForgotPasswordProps {
  navigation: ForgotPasswordScreenNavigationProp;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
          source={require('../../../../assets/authenticationBackground.jpeg')}
          style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <Text style={styles.forgotPasswordText}>Reset Password</Text>
            <Text style={styles.forgotPassworInputTextTitle}>New password</Text>
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="gray"
                autoCorrect={false}
              />
            </View>
            <Text style={styles.forgotPassworInputTextTitle}>Confirm new password</Text>
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Confirm password"
                placeholderTextColor="gray"
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={() => {
                navigation.push('Login');
              }}
            >
              <Text style={styles.forgotPasswordButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
    padding: 2,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  forgotPasswordText: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#ededed',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  forgotPasswordButton: {
    height: 50,
    backgroundColor: '#DEC109',
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  forgotPassworInputTextTitle: {
    marginBottom: 10,
    color: 'gray',
    fontSize: 14,
  },
  inputTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
});

export default ForgotPassword;
