import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import CardCar from "../components/CardCar";
import { FlashList } from "@shopify/flash-list";
import TopPage from "../components/TopPage";
import BrandCar from "../components/BrandCar";
import NavBar from "../components/NavBar";
import SearchCar from "../components/SearchCar";
import { SelectedBrand as SelectedB } from "../reducers/Action";
import { useDispatch, useSelector } from "react-redux";

export default function Home({ route }) {
  const dispatch = useDispatch();
  const { message } = route.params || {};
  const [searchTerm, setSearchTerm] = useState("");
  const CarsData = useSelector((state) => state.CarsData);
  const SelectedBrand = useSelector((state) => state.SelectedBrand);
  const [filteredCars, setFilteredCars] = useState(CarsData);
  useEffect(() => {
    if (SelectedBrand.length > 0) {
      setFilteredCars(SelectedBrand);
    } else {
      setFilteredCars(CarsData);
    }
  }, [SelectedBrand, CarsData]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text === "") {
      setFilteredCars(CarsData);
    } else {
      const filtered = CarsData.filter(
        (car) =>
          car.brand.toLowerCase().includes(text.toLowerCase()) ||
          car.model.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  };
  const handleAll = () => {
    setFilteredCars(CarsData);
    setSearchTerm("");
    dispatch(SelectedB(""));
  };

  return (
    <View style={styles.container}>
      <TopPage />
      <SearchCar onSearch={handleSearch} />

      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <FlashList
          data={filteredCars}
          renderItem={({ item }) => (
            <CardCar
              id={item.id}
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
          keyExtractor={(item) => item.id}
          estimatedItemSize={200}
          ListHeaderComponent={() => (
            <>
              <Text style={styles.greeting}>
                Hello,
                <Text style={styles.username}> Yahya</Text>
              </Text>
              {message ? (
                <View style={styles.containerMessage}>
                  <Text style={styles.messageText}>{message}</Text>
                </View>
              ) : (
                ""
              )}
              <BrandCar />
              <View style={styles.popularHeader}>
                <Text style={styles.title}>Popular</Text>
                <TouchableOpacity onPress={handleAll}>
                  <Text style={styles.seeAll}>See All</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          ListFooterComponent={<View style={{ height: 60 }} />}
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
  greeting: {
    color: "gray",
    fontSize: 20,
    textAlign: "center",
  },
  username: {
    color: "white",
  },
  popularHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#c2fa00",
    fontSize: 16,
  },
  containerMessage: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    borderColor: "#9bff00",
    padding: 10,
    borderWidth: 3,
    marginVertical: 10,
    backgroundColor: "#333",
  },
  messageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#9bff00",
  },
});
