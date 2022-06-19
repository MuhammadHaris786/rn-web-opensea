import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import colors from "../Theme/colors";
import Items from "../components/Items";
import axios from "axios";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Items />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: Dimensions.get("screen").width,
    height: "100%",
    paddingTop: 20,
  },
});
