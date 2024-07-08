import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";
import SearchCar from "../components/SearchCar";
import CardCar from "../components/CardCar";
import NavBar from "../components/NavBar";

export default function Favorites() {
  const DataFavorites = useSelector((state) => state.Favorites);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFavorites, setFilteredFavorites] = useState(DataFavorites);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === "") {
      setFilteredFavorites(DataFavorites); // Reset to original data if search term is empty
    } else {
      const filtered = DataFavorites.filter(
        (item) =>
          item.brand.toLowerCase().includes(text.toLowerCase()) ||
          item.model.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredFavorites(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Favorites</Text>
        <View style={styles.notification}>
          <MaterialIcons name="notifications-none" size={27} color="gray" />
        </View>
      </View>
      <View>
        <SearchCar onSearch={handleSearch} />
      </View>
      <View style={styles.listContainer}>
        <FlashList
          data={filteredFavorites}
          renderItem={({ item }) => (
            <CardCar
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
              description={item.description}
              images={item.images}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          estimatedItemSize={200}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No favorites yet</Text>
          }
        />
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
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  notification: {
    justifyContent: "center",
  },
  listContainer: {
    paddingHorizontal: 15,
    flex: 1,
  },
  emptyText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
