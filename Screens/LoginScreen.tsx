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



export default function LoginScreen() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/loginBackground.jpeg")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Log in</Text>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />

            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.noAccountView}>
              <Text> Don't have an account?</Text>

              <TouchableOpacity >
                <Text
                  style={{ textDecorationLine: "underline", color: "#DEC109" }}
                >
                  {" "}
                  Sing Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ paddingBottom: 15 }}>
                <Text style={{ color: "gray" }}> __________________ </Text>
              </View>
              <Text style={{ color: "gray", fontSize: 20 }}> or </Text>
              <View>
                <Text style={{ color: "gray" }}> __________________ </Text>
              </View>
            </View>

            <Text style={{ color: "gray" }}>
              {" "}
              Login with the following options
            </Text>

            <View style={{ flexDirection: "row", paddingTop: 20, justifyContent: 'space-between'}}>
              <TouchableOpacity 
              style={styles.iconButtons}
              onPress={() => {}}>
                <Image
                  source={require("../assets/googleLogo.png")}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.iconButtons}
              onPress={() => {}}>
                <Image
                  source={require("../assets/facebookLogo.png")}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>

              <TouchableOpacity
              style={styles.iconButtons}
              onPress={() => {}}>
                <Image
                  source={require("../assets/appleLogo.png")}
                  style={{ width: 40, height: 40 }}
                />
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
    width: "80%",
    padding: 2,
  },

  loginText: {
    fontSize: 35,
    fontWeight: "bold",
  },

  loginContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "lightgray",
  },

  forgotPasswordContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  forgotPasswordText: {
    color: "#DEC109",
    textDecorationLine: "underline",
    paddingBottom: 20,
  },
  loginButton: {
    height: 50,
    backgroundColor: "#DEC109",
    padding: 10,
    borderRadius: 15,
  },
  loginButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },

  noAccountView: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "center",
    paddingBottom: 10,
  },

  iconButtons : {
    borderColor: 'DEDED9',
    backgroundColor: '#DEDED9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3
  }

});
