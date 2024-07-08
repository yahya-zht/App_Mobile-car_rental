// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import React from "react";
// import CardCar from "./CardCar";
// import CarsData from "../assets/DataBase/Cars";
// import { FlashList } from "@shopify/flash-list";
// export default function ListCars() {
//   return (
//     <View>
//       <View style={styles.header}>
//         <Text style={styles.title}>Popular</Text>
//         <Text style={styles.seeAll}>See All</Text>
//       </View>
//       <View style={{ flex: 1 }}>
//         <FlashList
//           data={CarsData}
//           renderItem={({ item }) => (
//             <CardCar
//               brand={item.brand}
//               image={item.image}
//               price={item.price}
//               model={item.model}
//               year={item.year}
//               transmission={item.transmission}
//               seats={item.seats}
//               doors={item.doors}
//               fuelType={item.fuelType}
//               rating={item.rating}
//             />
//           )}
//           keyExtractor={(item) => item.id}
//           estimatedItemSize={200}
//         />
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingVertical: 10,
//   },
//   title: {
//     color: "white",
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   seeAll: {
//     color: "#c2fa00",
//     fontSize: 16,
//   },
// });
