import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import colors from "../Theme/colors";
import Items from "../components/Items";
import axios from "axios";

const HomeScreen = () => {
  const [data, SetAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const url = "https://opensea-237e3-default-rtdb.firebaseio.com/data.json";
    const response = await axios.get(url);
    const result = await Object.values(response.data);
    console.log(result[0].name);
    SetAllData(result);
    setLoading(true);
  };
  const getImage = async () => {
    const response = await axios.get("gs://opensea-237e3.appspot.com/images/");
    const result = await Object.values(response.data);
    console.log(result);
  };
  useLayoutEffect(() => {
    getData();
    getImage();
  }, []);
  if (loading == true) {
    return (
      <ScrollView>
        <View style={styles.container}>
          {data.map((item, index) => {
            return (
              <Items
                name={item.name}
                description={item.description}
                price={item.price}
                index={index}
              />
            );
          })}
        </View>
      </ScrollView>
    );
  } else {
    return <View></View>;
  }
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: "100%",
    height: "100%",
    paddingTop: 20,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
});
