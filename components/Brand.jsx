import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
export default function Brand(props) {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={props.image} style={styles.carImage} />
      </View>
      <View>
        <Text
          style={{ textAlign: "center", fontWeight: "bold", color: "white" }}
        >
          {props.logoName}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 60,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    // backgroundColor: "#c2fa00",
    borderColor: "#c2fa00",
    borderWidth: 2,
    padding: 7,
  },
  carImage: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
  },
});
