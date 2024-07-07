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
import { AntDesign } from "@expo/vector-icons";
const { width: viewportWidth } = Dimensions.get("window");

export default function CarDetails({ route, navigation }) {
  const { CarData } = route.params;
  // console.log("CarData Tout =>", CarData);
  const renderItem = ({ item }) => (
    // <Image source={{ uri: item.uri }} style={styles.carouselImage} />
    <Image source={item} style={styles.carouselImage} />
  );
  const pressHandler = () => {
    navigation.goBack();
  };
  const carImages = [...CarData.images, CarData.image].reverse();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={pressHandler} style={{ padding: 10 }}>
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderColor: "red",
            borderWidth: 2,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="hearto" size={24} color="red" />
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
            // <Image source={{ uri: item.uri }} style={styles.thumbnail} />
            <Image source={item} style={styles.thumbnail} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{CarData.brand}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${CarData.price}.00/day</Text>
        </View>
        <Text style={styles.description}>{CarData.description}</Text>
        <View style={styles.specificationsContainer}>
          <View style={styles.specification}>
            <FontAwesome name="tachometer" size={24} color="white" />
            <Text style={styles.specificationText}>585 hp</Text>
          </View>
          <View style={styles.specification}>
            <MaterialIcons
              name="airline-seat-recline-normal"
              size={24}
              color="white"
            />
            <Text style={styles.specificationText}>{CarData.seats} Seats</Text>
          </View>
          <View style={styles.specification}>
            <MaterialIcons name="directions-car" size={24} color="white" />
            <Text style={styles.specificationText}>{CarData.transmission}</Text>
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
    backgroundColor: "#27262b",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  carouselImage: {
    width: viewportWidth,
    height: 210,
    padding: 20,
    // backgroundColor: "blue",
    resizeMode: "cover",
  },
  thumbnailContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: "red",
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
    backgroundColor: "#c2fa00",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
