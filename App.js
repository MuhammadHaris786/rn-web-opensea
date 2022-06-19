import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Navigation from "./src/screens/Navigation";

export default function App() {
  useFonts({
    popping: require("./Font/Poppins-Regular.ttf"),
  });

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
