import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import About from "../screens/About";
import Trends from "../screens/Trends";
import colors from "../Theme/colors";
import LoginScreen from "../screens/LoginScreen";
import MoreInformation from "../components/MoreInformation";
import Dashboard from "../screens/Dashboard";
import { Entypo, Foundation, FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, Pressable, View, Image } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function Root(navigation) {
  const adminPage = () => {
    navigation.navigation.navigate("LoginScreen");
  };
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => (
          // App Logo
          <Pressable onPress={adminPage}>
            <Image
              style={{ width: 200, height: 50 }}
              source={require("../../assets/OpenSea-Full-Logo (light).png")}
              resizeMode="contain"
            ></Image>
          </Pressable>
        ),
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
        tabBarStyle: {
          borderTopColor: colors.secondary,
          backgroundColor: colors.primary,
          height: 70,
        },
        tabBarItemStyle: {
          paddingTop: 20,
        },
        tabBarButton: ({ accessibilityState, style, children, ...props }) => (
          <Pressable
            accessibilityState={accessibilityState}
            {...props}
            style={style}
          >
            {accessibilityState.selected && (
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  height: 8,
                  width: "50%",
                  backgroundColor: colors.opensea,
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              ></View>
            )}
            {children}
          </Pressable>
        ),
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trends"
        component={Trends}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="newspaper-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        navigation={navigation}
        options={{
          title: "More",
          tabBarIcon: ({ color, size }) => (
            <Foundation name="indent-more" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
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
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};
export default Navigation;
