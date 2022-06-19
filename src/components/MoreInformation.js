import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../Theme/colors";

const MoreInformation = ({ route }) => {
  const link = route.params.params.link;
  const title = route.params.params.title;
  const description = route.params.params.description;
  const openLink = () => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.flex}>
        <TouchableOpacity style={styles.button} onPress={openLink}>
          <Text style={styles.heading}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoreInformation;

const styles = StyleSheet.create({
  flex: {
    width: "100%",
    position: "absolute",
    top: "85%",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.opensea,
    width: "20%",
    height: "10%",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
  },
  heading: {
    color: colors.white,
    fontSize: 35,
    fontFamily: "popping",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "popping",
    marginTop: 30,
    marginLeft: 30,
  },
});
