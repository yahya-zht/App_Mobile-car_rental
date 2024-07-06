import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import SearchCar from "../components/SearchCar";
import CarCard from "../components/CarCard";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

export default function Booking() {
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
          Booking
        </Text>
        <View style={styles.notification}>
          <MaterialIcons name="notifications-none" size={27} color="gray" />
        </View>
      </View>
      <View>
        <SearchCar />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Card />
        </ScrollView>
      </View>
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
});
