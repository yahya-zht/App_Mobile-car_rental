import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
export default function SearchCar(props) {
  const [searchTerm, setSearchTerm] = useState(searchTerm);

  return (
    <View style={styles.searchContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AntDesign name="search1" size={22} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchTerm}
          onChangeText={props.onSearch}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 15,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "gray",
    marginBottom: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    color: "gray",
    marginLeft: 10,
  },
});
