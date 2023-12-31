import React, { useState }  from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Touchable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function LoginScreen({ navigation }) {
  
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/authenticationBackground.jpeg")}
        style={styles.imageBackground}
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
            <View style={styles.inputTextContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={hidePassword}
              />
              <TouchableOpacity
                style={styles.passwordIcon}
                onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons
                  size={24}
                  color='gray'
                  name={hidePassword ? 'eye' : 'eye-off'}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={()=> navigation.push('ForgotPassword')}>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.push('TabBar')}> 
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.noAccountView}>
              <Text> Don't have an account?</Text>

              <TouchableOpacity onPress={()=> navigation.push('SignUp')}>
                <Text
                  style={styles.signupText}
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
                  source={require("../../assets/googleLogo.png")}
                  style={styles.loginOptionsImage}
                />
              </TouchableOpacity>

              <TouchableOpacity 
                style={styles.iconButtons}
                onPress={() => {}}>
                <Image
                  source={require("../../assets/facebookLogo.png")}
                  style={styles.loginOptionsImage}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.iconButtons}
                onPress={() => {}}>
                <Image
                  source={require("../../assets/appleLogo.png")}
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
  imageBackground: {
    width: "100%", 
    height: "100%", 
    position: "absolute"
  },
  loginText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  loginContainer: {
    marginBottom: 10,
  },
  signupText: {
    textDecorationLine: "underline", 
    color: "#DEC109"
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    marginTop: 16,
    marginBottom: 10,
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
  },
  loginButton: {
    height: 50,
    backgroundColor: "#DEC109",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
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
    marginVertical: 35,
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
    width: 35, 
    height: 35,
  },
  noAccountView: {
    flexDirection: "row",
    paddingTop: 14,
    justifyContent: "center",
  },
  iconButtons : {
    borderColor: 'DEDED9',
    backgroundColor: "#edebeb",
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 6
  },
  inputTextContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  passwordIcon: {
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  myfav:{
    backgroundColor:'grey',
    borderRadius:15,
    padding:15,
    alignItems:'center'
  }
});
