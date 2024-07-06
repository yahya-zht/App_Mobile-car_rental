import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CarCard from "./CarCard";
import Card from "./Card";

export default function ListCars() {
  const L = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Popular
        </Text>
        <Text style={{ color: "#c2fa00", fontSize: 16 }}>See All</Text>
      </View>
      <View>
        {L.map((i) => (
          <Card key={i} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
