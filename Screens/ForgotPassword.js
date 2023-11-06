import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function ForgotPassword() {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/authenticationBackground.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <Text style={styles.forgotPasswordText}>Reset Password</Text>
            <Text style={styles.forgotPassworInputTextTitle}>New password</Text>
            <TextInput
              style={styles.input}
              keyboardType="password"
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="gray"
              autoCorrect={false}
            />
            <Text style={styles.forgotPassworInputTextTitle}>Confirm new password</Text>
            <TextInput
              style={styles.input}
              keyboardType="password"
              secureTextEntry={true}
              placeholder="Confirm password"
              placeholderTextColor="gray"
              autoCorrect={false}
            />
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    width: "80%",
    padding: 2,
  },
  imageBackground: {
    width: "100%", 
    height: "100%", 
    position: "absolute"
  },
  forgotPasswordText: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: "gray",
    borderWidth: 0.8,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#ededed",
  },
  forgotPasswordButton: {
    height: 50,
    backgroundColor: "#DEC109",
    padding: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  forgotPasswordButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  forgotPassworInputTextTitle: {
    marginBottom: 10
  },
  forgotPasswordInputTextTitle: {
    color:'lightgray',
    fontSize: 18,
  },
  inputTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  passwordIcon: {
    position: 'absolute',
    right: 14,
    top: 14,
  }
});
