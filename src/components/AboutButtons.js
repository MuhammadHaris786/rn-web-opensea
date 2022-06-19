import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import colors from "../Theme/colors";

const AboutButtons = ({ title, navigation, base, description, link }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate("MoreInfo", {
          params: { title: base, description: description, link: link },
        });
      }}
    >
      <Text style={styles.text}>{title}</Text>
      <FontAwesome5
        name="greater-than"
        size={40}
        color={colors.white}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

export default AboutButtons;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width - 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "popping",
    fontWeight: "bold",
    marginTop: 30,
    marginLeft: 30,
  },
  icon: {
    marginTop: 30,
  },
});
