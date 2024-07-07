import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Booking from "../screens/Booking";
import Profile from "../screens/Profile";
import CarDetails from "../screens/CarDetails";

export default function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Favorites"
          component={Favorites}
          options={{
            title: "Favorites",
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: "SignUp",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
          }}
        />
        <Stack.Screen
          name="Booking"
          component={Booking}
          options={{
            title: "Booking",
          }}
        />
        <Stack.Screen
          name="CarDetails"
          component={CarDetails}
          options={{
            title: "CarDetails",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
