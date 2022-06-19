import { Dimensions, StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";
import Card from "../components/Cards";
import AboutButtons from "../components/AboutButtons";
import Description from "../data/Description";
import colors from "../Theme/colors";

const About = ({ navigation }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.style1}>
          <AboutButtons
            title={"About"}
            link={"https://opensea.io/about"}
            base={Description[0].title}
            description={Description[0].description}
            navigation={navigation}
          />
          <AboutButtons
            title={"Blog"}
            link={"https://opensea.io/blog/"}
            base={Description[1].title}
            description={Description[1].description}
            navigation={navigation}
          />
          <AboutButtons
            title={"Help Center"}
            link={"https://support.opensea.io/hc/en-us"}
            base={Description[2].title}
            description={Description[2].description}
            navigation={navigation}
          />
        </View>
        <View style={styles.style}>
          <Card
            color={colors.twitter}
            icon={"twitter"}
            title={"Twitter"}
            link={"https://mobile.twitter.com/OIC_OCI"}
          />
          <Card
            color={colors.facebook}
            icon={"facebook-square"}
            title={"Facebook"}
            link={"https://www.facebook.com/profile.php?id=100006505928202"}
          />
          <Card
            color={colors.github}
            icon={"github"}
            title={"Github"}
            link={"https://github.com/MuhammadHaris786"}
          />
          <Card
            color={colors.linkedin}
            icon={"linkedin-square"}
            title={"Linkedin"}
            link={"https://mobile.twitter.com/OIC_OCI"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    width: Dimensions.get("screen").width,
  },
  style1: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  style: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    marginLeft: "10%",
  },
});
