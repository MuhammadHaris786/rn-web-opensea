import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import colors from "../Theme/colors";

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "outlined" && {
          backgroundColor: colors.opensea,
          borderColor: colors.white,
        },
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.opensea,
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: colors.white,
  },
});
