import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Card from "./CardCar";
import CarsData from "../assets/DataBase/Cars";
import { FlashList } from "@shopify/flash-list";
export default function ListCars() {
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
      {/* <FlashList
        data={CarsData}
        renderItem={({ item }) => (
          <Card
            brand={item.brand}
            image={item.image}
            price={item.price}
            model={item.model}
            year={item.year}
            transmission={item.transmission}
            seats={item.seats}
            doors={item.doors}
            fuelType={item.fuelType}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.id}
        estimatedItemSize={200}
      /> */}
      <View>
        {CarsData.map((c, i) => (
          <Card
            key={i}
            brand={c.brand}
            image={c.image}
            price={c.price}
            model={c.model}
            year={c.year}
            transmission={c.transmission}
            seats={c.seats}
            doors={c.doors}
            fuelType={c.fuelType}
            rating={c.rating}
            description={c.description}
            images={c.images}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({});
