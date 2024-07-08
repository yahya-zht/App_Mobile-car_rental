import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CardCar(props) {
  const navigation = useNavigation();
  const CarData = props;
  const pressHandler = () => {
    navigation.navigate("CarDetails", { CarData });
  };
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.topRow}>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="gold" />
              <Text style={styles.ratingText}>{props.rating}</Text>
            </View>
          </View>
          <Text style={styles.title}>{props.brand}</Text>
          <Text style={styles.year}>{props.year}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image source={props.image} style={styles.carImage} />
        </View>
      </View>
      <View style={styles.details}>
        <MaterialIcons name="directions-car" size={20} color="white" />
        <Text style={styles.detailText}>{props.transmission}</Text>
        <MaterialIcons
          name="airline-seat-recline-normal"
          size={20}
          color="white"
        />
        <Text style={styles.detailText}>{props.seats} Seats</Text>
      </View>
      <Text style={styles.price}>${props.price}.00/day</Text>
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <MaterialIcons name="arrow-forward" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 20,
    margin: 10,
    width: "auto",
    position: "relative",
    borderColor: "white",
    borderWidth: 1,
    // width: "80%",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "white",
    marginLeft: 5,
  },
  carImage: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  year: {
    color: "white",
    fontSize: 18,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  detailText: {
    color: "white",
    marginHorizontal: 5,
  },
  price: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#9bff00",
    padding: 10,
    borderRadius: 50,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
