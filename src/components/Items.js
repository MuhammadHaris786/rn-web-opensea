import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import colors from "../Theme/colors";
import React from "react";

const Items = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Text style={styles.companyName}></Text>

      <Text style={styles.carName}></Text>
      <Text style={styles.price}></Text>
      <TouchableOpacity>
        <Text>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  image: {},
  companyName: {},
  carName: {},
  price: {},
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    marginLeft: 70,
    borderRadius: 40,
    width: "25%",
    height: 400,
    position: "relative",
    backgroundColor: colors.primary,
  },
});
