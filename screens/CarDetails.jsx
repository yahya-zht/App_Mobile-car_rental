import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const { width: viewportWidth } = Dimensions.get("window");

const carImages = [
  {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/2016_Mercedes-Benz_C_300_%28C_205%29_coupe_%282018-04-17%29_01.jpg/1280px-2016_Mercedes-Benz_C_300_%28C_205%29_coupe_%282018-04-17%29_01.jpg",
  },
  {
    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2017_Mercedes-Benz_C_200_%28W_205%29_sedan_%282018-08-31%29_01.jpg/1024px-2017_Mercedes-Benz_C_200_%28W_205%29_sedan_%282018-08-31%29_01.jpg",
  },
  {
    uri: "https://lifeonfour.co/wp-content/uploads/2022/03/Mercedes-Benz_C200_AVANTGARDE_W205_front.webp",
  },
  {
    uri: "https://img.icarcdn.com/autospinn-my/body/7865-2015-mercedes-benz-c-250-exclulsive-full-review-2.jpg",
  },
];

export default function CarDetails() {
  const renderItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.carouselImage} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="info-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={carImages}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
      />
      <View style={styles.thumbnailContainer}>
        <FlatList
          data={carImages}
          horizontal
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.thumbnail} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Mercedes SL 63 AMG</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>2500 AED/day</Text>
        </View>
        <Text style={styles.description}>
          The Mercedes SL 63 AMG is a sports car created using advanced
          technologies that have made it incredibly fast and powerful.
        </Text>
        <View style={styles.specificationsContainer}>
          <View style={styles.specification}>
            <FontAwesome name="tachometer" size={24} color="white" />
            <Text style={styles.specificationText}>585 hp</Text>
          </View>
          <View style={styles.specification}>
            <MaterialIcons name="directions-car" size={24} color="white" />
            <Text style={styles.specificationText}>Automatic</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  carouselImage: {
    width: viewportWidth,
    height: 250,
    resizeMode: "cover",
  },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  thumbnail: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
    borderRadius: 5,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  priceContainer: {
    backgroundColor: "#1C1C1C",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  price: {
    color: "white",
    fontSize: 18,
  },
  description: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  specificationsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  specification: {
    alignItems: "center",
  },
  specificationText: {
    color: "white",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#005CEE",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
