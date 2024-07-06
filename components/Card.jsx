import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function Card() {
  return (
    <View style={styles.card}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <View style={styles.topRow}>
            <View style={styles.rating}>
              <FontAwesome name="star" size={16} color="gold" />
              <Text style={styles.ratingText}>4.5</Text>
            </View>
          </View>
          <Text style={styles.title}>Tesla Model S</Text>
          <Text style={styles.year}>2024</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={{
              uri: "https://platform.cstatic-images.com/large/in/v2/stock_photos/af62d38b-ae53-46c1-b2cf-91b77299eed4/9e8d9674-2433-4fa7-8fb2-4fdac6abaaf8.png",
            }}
            style={styles.carImage}
          />
        </View>
      </View>

      <View style={styles.details}>
        <MaterialIcons name="directions-car" size={20} color="white" />
        <Text style={styles.detailText}>Automatic</Text>
        <MaterialIcons
          name="airline-seat-recline-normal"
          size={20}
          color="white"
        />
        <Text style={styles.detailText}>5 Seats</Text>
      </View>
      <Text style={styles.price}>$500.00/day</Text>
      <TouchableOpacity style={styles.button}>
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
