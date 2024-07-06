import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function NavBar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name="home" size={24} color="#c2fa00" />
          <Text style={{ color: "#c2fa00", fontWeight: "bold" }}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name="hearto" size={24} color="gray" />
          <Text style={{ color: "gray", fontWeight: "bold" }}>Favorites</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name="shoppingcart" size={24} color="gray" />
          <Text style={{ color: "gray", fontWeight: "bold" }}>Cart</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Feather name="user" size={24} color="gray" />
          <Text style={{ color: "gray", fontWeight: "bold" }}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#333",
  },
  button: {},
});
