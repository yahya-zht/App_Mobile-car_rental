import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { FlashList } from "@shopify/flash-list";
import SearchCar from "../components/SearchCar";
import CardCar from "../components/CardCar";
import NavBar from "../components/NavBar";

export default function Booking({ navigation }) {
  const DataBooking = useSelector((state) => state.Booking);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooking, setFilteredBooking] = useState(DataBooking);

  useEffect(() => {
    setFilteredBooking(DataBooking);
  }, [DataBooking]);
  const handleBooking = () => {
    // Handle booking action
  };

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === "") {
      setFilteredBooking(DataBooking); // Reset to original data if search term is empty
    } else {
      const filtered = DataBooking.filter(
        (item) =>
          item.brand.toLowerCase().includes(text.toLowerCase()) ||
          item.model.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredBooking(filtered);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Booking</Text>
        <View style={styles.notification}>
          <MaterialIcons name="notifications-none" size={27} color="gray" />
        </View>
      </View>
      <SearchCar onSearch={handleSearch} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.listContainer}>
          <FlashList
            data={filteredBooking}
            renderItem={({ item }) => (
              <CardCar
                id={item.id}
                showRemoveButtonBooking={true}
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
              <Text style={styles.emptyText}>No Booking yet</Text>
            }
          />
        </View>
      </ScrollView>
      {DataBooking.length > 0 && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BookingDate")}
        >
          <Text style={styles.buttonText}>Booking Now</Text>
        </TouchableOpacity>
      )}
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
    // paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  notification: {
    justifyContent: "center",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  listContainer: {
    flexGrow: 1,
    paddingBottom: 70,
  },
  emptyText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  button: {
    position: "absolute",
    bottom: 65,
    left: 20,
    right: 20,
    backgroundColor: "#c2fa00",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
