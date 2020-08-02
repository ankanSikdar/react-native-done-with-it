import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import AppText from "./AppText";
import colors from "../config/colors";

const OfflineNotice = (props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connection</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 50,
    justifyContent: "center",
    width: "100%",
    top: Constants.statusBarHeight,
    position: "absolute",
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
