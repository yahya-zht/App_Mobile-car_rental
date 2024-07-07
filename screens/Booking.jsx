import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import SearchCar from "../components/SearchCar";
import CardCar from "../components/CardCar";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";

export default function Booking() {
  const DataBooking = useSelector((state) => state.Booking);
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
          Booking
        </Text>
        <View style={styles.notification}>
          <MaterialIcons name="notifications-none" size={27} color="gray" />
        </View>
      </View>
      <View>
        <SearchCar />
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {DataBooking.length > 0 ? (
            DataBooking.map((c, i) => (
              <CardCar
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
            ))
          ) : (
            <Text style={{ color: "white", fontSize: 16 }}>No Booking yet</Text>
          )}
        </ScrollView>
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
});
