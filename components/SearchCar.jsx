import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function SearchCar() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="search1" size={22} color="gray" />
        <Text style={{ color: "gray", marginStart: 10 }}>Search...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
    borderRadius: 10,
    margin: 10,
  },
});
