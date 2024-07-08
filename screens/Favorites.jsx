import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import React from "react";
import NavBar from "../components/NavBar";
import { MaterialIcons } from "@expo/vector-icons";
import SearchCar from "../components/SearchCar";
import CardCar from "../components/CardCar";
import { useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";

export default function Favorites() {
  const DataFavorites = useSelector((state) => state.Favorites);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Favorites</Text>
          <View style={styles.notification}>
            <MaterialIcons name="notifications-none" size={27} color="gray" />
          </View>
        </View>
        <View>
          <SearchCar />
        </View>
        <View style={styles.listContainer}>
          <FlashList
            data={DataFavorites}
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27262b",
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    flex: 1,
  },
  emptyText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
