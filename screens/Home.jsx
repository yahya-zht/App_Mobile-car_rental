import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CarCard from "../components/CarCard";
import TopPage from "../components/TopPage";
import SearchCar from "../components/SearchCar";
import BrandCar from "../components/BrandCar";
import ListCars from "../components/ListCars";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <TopPage />
      <ScrollView>
        <View>
          <Text style={{ color: "gray", fontSize: 20, textAlign: "center" }}>
            Hello,
            <Text style={{ color: "white" }}> Yahya</Text>
          </Text>
        </View>
        <SearchCar />
        <BrandCar />
        <ListCars />
      </ScrollView>
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
