import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { MaterialIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import image from "../assets/profile/avatar03.jpeg";
export default function Profile() {
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
          Profile
        </Text>
        <View style={styles.notification}>
          <MaterialIcons name="notifications-none" size={27} color="gray" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#c2fa00",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 15,
          }}
        >
          <View>
            <View style={styles.imgProfile}>
              <Image source={image} style={styles.img} />
            </View>
          </View>
          <View>
            <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
              Yahya Dev
            </Text>
            <Text style={{ color: "gray", fontSize: 16 }}>
              User ID: 1234567890
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.info}>
            <Foundation name="telephone" size={24} color="#c2fa00" />
            <Text style={{ color: "white", fontSize: 18, marginStart: 15 }}>
              +1 (123) 456-7890
            </Text>
          </View>
          <View style={styles.log_out}>
            <Entypo name="log-out" size={24} color="red" />
            <Text style={{ color: "red", fontSize: 18, marginStart: 15 }}>
              Log-out
            </Text>
          </View>
        </View>
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
  imgProfile: {
    justifyContent: "center",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "white",
    marginEnd: 20,
  },
  info: {
    marginVertical: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#c2fa00",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  log_out: {
    marginVertical: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
});
