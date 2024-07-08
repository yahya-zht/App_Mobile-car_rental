import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useDispatch } from "react-redux";
import { RemoveAllFromBooking } from "../reducers/Action";

const Payment = ({ navigation }) => {
  const [promoCode, setPromoCode] = useState("");
  const dispatch = useDispatch();

  const handlePayNow = () => {
    navigation.navigate("Home", { message: "Booking successful!" });
    dispatch(RemoveAllFromBooking());
    alert("All Cars Removed");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cards</Text>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Bank Card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Apple Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>PayPal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Google Pay</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Promo Code"
        placeholderTextColor="#aaa"
        value={promoCode}
        onChangeText={setPromoCode}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Rent car</Text>
        <Text style={styles.orderText}>Order N070490</Text>
        <Text style={styles.carText}>Rolls-Royce Cullinan</Text>
        <Text style={styles.priceText}>$6300</Text>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
        <Text style={styles.payButtonText}>Pay now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27262b",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  cardButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#9bff00",
  },
  cardButtonText: {
    color: "#27262b",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 5,
    color: "#ffffff",
    marginBottom: 20,
  },
  summaryContainer: {
    padding: 20,
    backgroundColor: "#444",
    borderRadius: 5,
    marginBottom: 20,
  },
  summaryText: {
    color: "#ffffff",
    fontSize: 16,
  },
  orderText: {
    color: "#ffffff",
    fontSize: 14,
    marginVertical: 10,
  },
  carText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  priceText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
  },
  payButton: {
    backgroundColor: "#9bff00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  payButtonText: {
    color: "#27262b",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Payment;
