import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import colors from "../Theme/colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
