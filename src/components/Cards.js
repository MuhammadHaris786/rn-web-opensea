import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Dimensions,
} from "react-native";
import colors from "../Theme/colors";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ title, icon, color, link }) => {
  const openLink = () => {
    Linking.openURL(link);
  };
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={openLink}
    >
      <AntDesign name={icon} size={100} color="white" style={styles.image} />
      <Text style={styles.categoryTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 40,
    width: "40%",
    height: 300,
    position: "relative",
  },
  image: {
    position: "absolute",
    bottom: "40%",
    left: "10%",
  },
  defaultTitle: {
    color: colors.black,
    fontSize: 18,
    letterSpacing: 1,
    marginTop: 10,
    marginLeft: 5,
  },
  categoryTitle: {
    position: "absolute",
    color: colors.white,
    fontWeight: "bold",
    fontFamily: "popping",
    fontSize: 30,
    width: 150,
    bottom: "20%",
    left: "10%",
  },
});

export default Card;
