import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen({ navigation }) {

  return (     
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/authenticationBackground.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Sign up</Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              keyboardType= 'default'
            />
            <TextInput
              style={styles.input}
              placeholder="Address"
            />
            <TextInput
              style={styles.input}
              placeholder="Phone number"
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
            <TouchableOpacity style={styles.createAccountButton} onPress={()=> { 
              alert("Account created successfully!")
              navigation.push('Login')
              }}>
              <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.haveAccountView}>
              <Text>Already have an account?</Text>
              <TouchableOpacity onPress={()=> navigation.push('Login')}>
                <Text
                  style={styles.loginText}
                >
                  {" "}
                  Log in
                </Text>
              </TouchableOpacity>
            </View>
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
    width: "85%",
    padding: 2,
  },
  signupText: {
    fontFamily: "Helvetica Neue",
    fontSize: 35,
    fontWeight: "bold",
  },
  signupContainer: {
    marginBottom: 20,
  },
  loginText: {
    textDecorationLine: "underline", 
    color: "#DEC109"
  },
  imageBackground: {
    width: "100%", 
    height: "100%", 
    position: "absolute"
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 0.8,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#ededed",
  },
  createAccountButton: {
    height: 50,
    backgroundColor: "#DEC109",
    padding: 10,
    borderRadius: 15,
  },
  createAccountButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
   haveAccountView: {
    flexDirection: "row",
    paddingTop: 14,
    justifyContent: "center",
    paddingBottom: 10,
  }
});


