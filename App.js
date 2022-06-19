import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import HomeScreen from "./src/screens/HomeScreen";
import About from "./src/screens/About";
import Trends from "./src/screens/Trends";
import colors from "./src/Theme/colors";
import MoreInformation from "./src/components/MoreInformation";

export default function App() {
  useFonts({
    popping: require("./Font/Poppins-Regular.ttf"),
  });
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  function Root(navigation) {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
            borderBottomColor: colors.secondary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "popping",
          },
          headerTitleAlign: "center",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Trends" component={Trends} />
        <Tab.Screen
          name="About"
          component={About}
          navigation={navigation}
          options={{
            title: "More",
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
            borderBottomColor: colors.secondary,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "popping",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoreInfo"
          component={MoreInformation}
          options={{ title: "More Information" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,

    alignItems: "center",
    justifyContent: "center",
  },
});
