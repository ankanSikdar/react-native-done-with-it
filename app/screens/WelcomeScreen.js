import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      blurRadius={3}
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
