import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import colors from "../Theme/colors";
import React from "react";
// import logo from "../assets/item.jpg";

const Items = ({ name, description, price, index }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require(`../assets/item${index}.jpg`)}
      />
      <Text style={styles.companyName}>{name}</Text>
      <View style={styles.flex}>
        <Text style={styles.carName}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    marginLeft: 70,
    borderRadius: 40,
    width: 340,
    height: 450,
    position: "relative",
    backgroundColor: colors.primary,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 320,
    height: 300,
    borderRadius: 30,
    marginLeft: 10,
    marginTop: 5,
  },
  companyName: {
    color: colors.white,
    fontSize: 20,
    fontFamily: "popping",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  carName: {
    fontSize: 14,
    color: colors.white,
    marginLeft: 20,
    marginBottom: 30,
  },
  price: {
    fontSize: 18,
    color: colors.opensea,
    marginRight: 50,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    color: colors.white,
    textAlign: "center",
  },
  button: {
    width: "50%",
    height: "9%",
    backgroundColor: colors.opensea,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 80,
  },
});
