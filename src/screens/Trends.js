import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import colors from "../Theme/colors";
const Trends = () => {
  const [horoscope, setHoroscope] = useState("libra");
  let URL = `https://aztro.sameerkumar.website/?sign=${horoscope}&day=today`;
  axios.post(URL).then((response) => {
    console.log(response.data);
  });
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

export default Trends;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
});
