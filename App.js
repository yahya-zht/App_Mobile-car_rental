import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CarCard from "./components/CarCard";
import CarDetails from "./screens/CarDetails";
import Home from "./screens/Home";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" hidden />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#27262b",
  },
});
