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


export default function SignUpScreen() {

    return (
       
<SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("/Users/oladipupoolasile/Desktop/BudgetBuy/assets/loginBackground.jpeg")}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        <View style={styles.overlay}>
          <View style={styles.inputContainer}>
            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Sign up</Text>
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


            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountButtonText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.haveAccountView}>
              <Text>Already have an account?</Text>
              <TouchableOpacity>
                <Text
                  style={{ textDecorationLine: "underline", color: "#DEC109" }}
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

  loginText: {
    fontFamily: "Helvetica Neue",
    fontSize: 35,
    fontWeight: "bold",
  },

  loginContainer: {
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "lightgray",
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
    fontSize: 25,
    fontWeight: "bold",
  },

   haveAccountView: {
    flexDirection: "row",
    paddingTop: 10,
    justifyContent: "center",
    paddingBottom: 10,
  }

});


