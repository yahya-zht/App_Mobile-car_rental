import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import CarCard from "../components/CarCard";
import TopPage from "../components/TopPage";
import SearchCar from "../components/SearchCar";
import BrandCar from "../components/BrandCar";
import ListCars from "../components/ListCars";
import NavBar from "../components/NavBar";

export default function Home(props) {
  return (
    <View style={styles.container}>
      <TopPage />
      <View style={{ flex: 1 }}>
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
