import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
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
