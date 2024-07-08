import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Brand from "./Brand";
// import Data from "../assets/DataBase/Brand.json";
import Data from "../assets/DataBase/Brand.js";

const brandList = Data.map((brand, index) => (
  <Brand
    key={index}
    logoName={brand.logo}
    image={brand.image}
    NameBrand={brand.NameBrand}
  />
));
export default function BrandCar() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Brand Categories
        </Text>
        <Text style={{ color: "#c2fa00", fontSize: 16 }}>See All</Text>
      </View>
      <View>
        <ScrollView
          ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {brandList}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#27262b",
  },
});
