import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CarsData from "../assets/DataBase/Cars";
import { useDispatch } from "react-redux";
import { SelectedBrand } from "../reducers/Action";
export default function Brand(props) {
  const dispatch = useDispatch();
  const pressHandler = () => {
    dispatch(SelectedBrand(props.NameBrand));
  };
  return (
    <TouchableOpacity onPress={pressHandler}>
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
    </TouchableOpacity>
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
