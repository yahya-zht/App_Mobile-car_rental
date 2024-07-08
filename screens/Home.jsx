// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
// import React from "react";
// import TopPage from "../components/TopPage";
// import SearchCar from "../components/SearchCar";
// import BrandCar from "../components/BrandCar";
// import ListCars from "../components/ListCars";
// import NavBar from "../components/NavBar";

// export default function Home() {
//   return (
//     // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     <View style={styles.container}>
//       <TopPage />
//       <View style={{ flex: 1 }}>
//         <ScrollView>
//           <View>
//             <Text style={{ color: "gray", fontSize: 20, textAlign: "center" }}>
//               Hello,
//               <Text style={{ color: "white" }}> Yahya</Text>
//             </Text>
//           </View>
//           <SearchCar />
//           <BrandCar />
//           <ListCars />
//         </ScrollView>
//       </View>
//       <View style={{ height: 60 }}>
//         <NavBar />
//       </View>
//     </View>
//     // </TouchableWithoutFeedback>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#27262b",
//     paddingHorizontal: 15,
//   },
// });

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

export default function MainPage() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <TopPage />
        <View style={{ flex: 1 }}>
          <FlashList
            data={CarsData}
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
            keyExtractor={(item) => item.id}
            estimatedItemSize={200}
            ListHeaderComponent={() => (
              <>
                <View>
                  <Text style={styles.greeting}>
                    Hello,
                    <Text style={styles.username}> Yahya</Text>
                  </Text>
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
    </TouchableWithoutFeedback>
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
});
