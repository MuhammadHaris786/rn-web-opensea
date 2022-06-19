import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { Feather } from "@expo/vector-icons";
import colors from "../Theme/colors";

const SearchBar = ({ submitted }) => {
  const [input, setInput] = useState("");
  const submitText = () => {
    submitted(input.toLowerCase());
    console.log(input.toLowerCase());
    setInput("");
  };
  return (
    <View style={styles.container}>
      <Feather name="search" size={20} color={"grey"} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Enter your Star for Horoscope"
        onChangeText={(val) => {
          setInput(val);
        }}
        value={input}
        onSubmitEditing={submitText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 10,
    height: 60,
    width: "90%",
    alignSelf: "center",
  },
  icon: {
    padding: 10,
  },
  input: {
    color: colors.white,
    height: 60,
    width: "100%",
    paddingLeft: 10,
  },
});

export default SearchBar;
