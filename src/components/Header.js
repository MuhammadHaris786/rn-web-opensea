import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { theme } from "../core/theme";
import colors from "../Theme/colors";

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: colors.opensea,
    fontWeight: "bold",
    paddingVertical: 12,
  },
});
