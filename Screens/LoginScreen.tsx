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

export default function LoginScreen({ navigation }) {
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/loginBackground.jpeg")}
        style={styles.ImageBackground}
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

              <TouchableOpacity onPress={()=> navigation.push('SignUp')}>
                <Text
                  style={styles.signupTexte}
                >
                  {" "}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.orContainer}>
              <View>
                <Text style={styles.greyText}> __________________ </Text>
              </View>
              <Text style={styles.orText}> or </Text>
              <View>
                <Text style={styles.greyText}> __________________ </Text>
              </View>
            </View>

            <Text style={styles.greyText}>
              {" "}
              Login with the following options
            </Text>

            <View style={styles.loginOptionsContainer}>
              <TouchableOpacity 
                style={styles.iconButtons}
                onPress={() => {}}>
                <Image
                  source={require("../assets/googleLogo.png")}
                  style={styles.loginOptionsImage}
                />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.iconButtons}
                onPress={() => {}}>
                <Image
                  source={require("../assets/facebookLogo.png")}
                  style={styles.loginOptionsImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButtons}
                onPress={() => {}}>
                <Image
                  source={require("../assets/appleLogo.png")}
                  style={styles.loginOptionsImage}
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
  ImageBackground: {
    width: "100%", 
    height: "100%", 
    position: "absolute"
  },
  loginText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  loginContainer: {
    marginBottom: 30,
  },
  signupTexte: {
    textDecorationLine: "underline", 
    color: "#DEC109"
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "#ededed",
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
    fontSize: 22,
    fontWeight: "bold",
  },
  greyText: {
    color: "gray"
  },
  orContainer: {
    flexDirection: "row", 
    justifyContent: 'space-around', 
    marginBottom: 30 
  },
  orText: {
    color: "gray", 
    fontSize: 20 
  },
  loginOptionsContainer: {
    flexDirection: "row", 
    paddingTop: 20, 
    justifyContent: 'space-between'
  },
  loginOptionsImage: {
    width: 40, 
    height: 40 
  },
  noAccountView: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "center",
    paddingBottom: 20,
  },
  iconButtons : {
    borderColor: 'DEDED9',
    backgroundColor: "#ededed",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 3
  }
});
