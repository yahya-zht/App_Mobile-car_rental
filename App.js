import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import CarCard from "./components/CarCard";
import CarDetails from "./screens/CarDetails";
import Home from "./screens/Home";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Router from "./routes/Router";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" hidden />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27262b",
  },
});
