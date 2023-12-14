import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MainOnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.firstImage}
        source={require("../assets/firstImage.jpeg")}
      />

      <Text style={styles.text}> Budget Buy </Text>

      <View style={styles.secondImageContainer}>
        <Image
          style={styles.secondImage}
          source={require("../assets/secondImage.jpeg")}
        />
      </View>

      <Text style={styles.textTwo}> Personalized Recommendation: </Text>

      <Text style={styles.textThree}>
        The more you browse and engage, the better we can tailor our
        recommendation
      </Text>

      <View style={styles.progressAndArrowView}>
        <View style={styles.progessLineContainer}>
          <View style={styles.progressLine}></View>
          <View style={styles.progressLine}></View>
        </View>

        <TouchableOpacity style={styles.roundBorder}>
          <View style={styles.arrowContainer}>
            <Image
              style={styles.arrowImage}
              source={require("../assets/arrowRight.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  firstImage: {
    width: "100%",
    height: 180,
    marginBottom: 30,
  },
  text: {
    fontSize: 37,
    fontWeight: "700",
    marginTop: 10,
    color: "#faa543",
  },

  secondImageContainer: {
    width: "100%",
    alignItems: "center",
  },
  secondImage: {
    width: 300,
    height: 300,
  },

  textTwo: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#faa543",
    paddingBottom: 10,
  },

  textThree: {
    fontSize: 12,
    fontWeight: "400",
    color: "gray",
    paddingBottom: 15,
  },

  progessLineContainer: {
    flexDirection: "row",
    marginTop: 10,
    padding: 5,
  },
  progressLine: {
    width: 40,
    height: 7,
    backgroundColor: "#f0a44d",
    borderRadius: 1,
    marginHorizontal: 5,
    borderRadius: 5,
  },

  roundBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#e3e1de",
    justifyContent: "center",
    alignItems: "center",
  },

  arrowContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0a44d",
    justifyContent: "center",
    alignItems: "center",
  },

  arrowImage: {
    width: 30,
    height: 30,
  },

  progressAndArrowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
});

export default MainOnboardingScreen;
