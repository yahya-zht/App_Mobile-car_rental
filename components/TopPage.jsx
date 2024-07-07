import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import image from "../assets/profile/avatar03.jpeg";
export default function TopPage() {
  return (
    <View style={styles.container}>
      <View style={styles.imgProfile}>
        <Image source={image} style={styles.img} />
      </View>
      <View style={styles.from}>
        <Fontisto name="map-marker-alt" size={20} color="white" />
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: "white",
            marginStart: 10,
          }}
        >
          New York,US
        </Text>
      </View>
      <View style={styles.notification}>
        <MaterialIcons name="notifications-none" size={27} color="gray" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  from: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgProfile: {
    justifyContent: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "white",
  },
  notification: {
    justifyContent: "center",
  },
});
