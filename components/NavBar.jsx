import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function NavBar() {
  const navigation = useNavigation();
  const route = useRoute();

  const getColor = (screen) => (route.name === screen ? "#c2fa00" : "gray");

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name="home" size={24} color={getColor("Home")} />
          <Text style={{ color: getColor("Home"), fontWeight: "bold" }}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Favorites")}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <AntDesign name="hearto" size={24} color={getColor("Favorites")} />
          <Text style={{ color: getColor("Favorites"), fontWeight: "bold" }}>
            Favorites
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Booking")}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <MaterialIcons
            name="date-range"
            size={24}
            color={getColor("Booking")}
          />
          <Text style={{ color: getColor("Booking"), fontWeight: "bold" }}>
            Booking
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Feather name="user" size={24} color={getColor("Profile")} />
          <Text style={{ color: getColor("Profile"), fontWeight: "bold" }}>
            Profile
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#333",
  },
  button: {},
});
