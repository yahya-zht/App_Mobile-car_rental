import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import React from "react";
import CardCar from "../components/CardCar";
import CarsData from "../assets/DataBase/Cars";
import { FlashList } from "@shopify/flash-list";
import TopPage from "../components/TopPage";
import SearchCar from "../components/SearchCar";
import BrandCar from "../components/BrandCar";
import NavBar from "../components/NavBar";

export default function Home({ route }) {
  const { message } = route.params || {};
  return (
    <View style={styles.container}>
      <TopPage />
      <View style={{ flex: 1 }}>
        <FlashList
          data={CarsData}
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
              <View>
                <Text style={styles.greeting}>
                  Hello,
                  <Text style={styles.username}> Yahya</Text>
                </Text>
                {/* <Text>{message && message}</Text> */}
                {/* <Text>{message || ""}</Text> */}
                {message ? (
                  <View style={styles.containerMessage}>
                    <Text style={styles.messageText}>{message}</Text>
                  </View>
                ) : (
                  ""
                )}
              </View>
              <SearchCar />
              <BrandCar />
              <View style={styles.popularHeader}>
                <Text style={styles.title}>Popular</Text>
                <Text style={styles.seeAll}>See All</Text>
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
    paddingHorizontal: 15,
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
    paddingHorizontal: 10,
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
    flex: 1,
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
