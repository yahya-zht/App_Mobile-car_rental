import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { MaterialIcons } from "@expo/vector-icons";
import SearchCar from "../components/SearchCar";
import Card from "../components/Card";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Favorites
        </Text>
        <View style={styles.notification}>
          <MaterialIcons name="notifications-none" size={27} color="gray" />
        </View>
      </View>
      <View>
        <SearchCar />
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          {/* <Text style={{ color: "white", fontSize: 16 }}>No favorites yet</Text> */}
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      <View style={{ height: 60 }}>
        <NavBar />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27262b",
    paddingHorizontal: 15,
  },
  notification: {
    justifyContent: "center",
  },
});
