import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import colors from "../Theme/colors";
const Trends = () => {
  const [horoscope, setHoroscope] = useState("libra");
  const [data, setData] = useState({
    DateZone: "",
    Date: "",
    Description: "",
    Compatibility: "",
    luckyNumber: "",
    luckyTime: "",
    Mood: "",
  });
  let URL = `https://aztro.sameerkumar.website/?sign=${horoscope}&day=today`;

  useEffect(() => {
    axios
      .post(URL)
      .then((response) => {
        if (!response.data) {
          console.log(`wrong entry`);
        } else {
          console.log(response.data);
          setData({
            DateZone: response.data.date_range,
            Date: response.data.current_date,
            Description: response.data.description,
            Compatibility: response.data.compatibility,
            luckyNumber: response.data.lucky_number,
            luckyTime: response.data.lucky_time,
            Mood: response.data.mood,
          });
        }
      })
      .catch((e) => {
        console.log("Kindly Enter Correctly " + e);
      });
  }, [horoscope]);
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchBar submitted={setHoroscope} />

        <Text style={styles.heading}>Star: {horoscope}</Text>
        <Text style={styles.description}>
          Date Zone of Star is: {data.DateZone}
        </Text>
        <Text style={styles.description}>Date: {data.Date}</Text>
        <Text style={styles.description}>Horoscope: {data.Description}</Text>
        <Text style={styles.description}>
          Compatibility: {data.Compatibility}
        </Text>
        <Text style={styles.description}>Mood: {data.Mood}</Text>
        <Text style={styles.description}>Lucky Number: {data.luckyNumber}</Text>
        <Text style={styles.description}>Lucky Time: {data.luckyTime}</Text>
      </View>
    </ScrollView>
  );
};

export default Trends;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: Dimensions.get("screen").width,
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
