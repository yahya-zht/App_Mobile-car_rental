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
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 10 }}
        >
          <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
      </View>
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
      <View style={styles.CardContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{ color: "black", fontWeight: "bold", marginBottom: 7 }}
            >
              Name
            </Text>
            <TextInput
              placeholder="Name"
              style={{
                borderColor: "black",
                paddingHorizontal: 50,
                paddingVertical: 5,
                borderWidth: 2,
                borderRadius: 10,
                color: "black",
              }}
            ></TextInput>
          </View>
          <View>
            <Text
              style={{ color: "black", fontWeight: "bold", marginBottom: 7 }}
            >
              Card ID
            </Text>
            <TextInput
              placeholder="Blue Card"
              style={{
                borderColor: "black",
                paddingHorizontal: 50,
                paddingVertical: 5,
                borderWidth: 2,
                borderRadius: 10,
                color: "black",
              }}
            ></TextInput>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ color: "black", fontWeight: "bold", marginVertical: 7 }}
            >
              Enter Card Details
            </Text>
            <FontAwesome6 name="credit-card-alt" size={24} color="black" />
          </View>
          <View>
            <TextInput
              placeholder="1234 5678 9012 3456"
              style={{
                borderColor: "black",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 2,
                borderRadius: 10,
                color: "black",
              }}
            ></TextInput>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{ color: "black", marginVertical: 7, fontWeight: "bold" }}
            >
              Expiration Date
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TextInput
                placeholder="MM"
                style={{
                  borderColor: "black",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderWidth: 2,
                  borderRadius: 10,
                  color: "black",
                }}
              ></TextInput>
              <Text
                style={{
                  fontSize: 25,
                  color: "black",
                  fontWeight: "bold",
                  marginHorizontal: 5,
                }}
              >
                /
              </Text>
              <TextInput
                placeholder="YY"
                style={{
                  borderColor: "black",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderWidth: 2,
                  borderRadius: 10,
                  color: "black",
                }}
              ></TextInput>
            </View>
          </View>
          <View>
            <Text
              style={{ color: "black", fontWeight: "bold", marginVertical: 7 }}
            >
              CVV/CVC
            </Text>
            <TextInput
              placeholder="123"
              style={{
                borderColor: "black",
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderWidth: 2,
                borderRadius: 10,
                color: "black",
              }}
            ></TextInput>
          </View>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Promo Code"
        placeholderTextColor="#aaa"
        value={promoCode}
        onChangeText={setPromoCode}
      />
      <View style={styles.summaryContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.carText}>Rent car</Text>
          <Text style={styles.orderText}>Order N070490</Text>
        </View>
        <Text style={styles.carText}>Rolls-Royce Cullinan</Text>
        <Text style={{ color: "white", marginStart: 10 }}>
          $190/Day <Text style={{ marginStart: 25 }}> 3 days</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.carText}>Subtotal</Text>
          <Text style={styles.orderText}>$570</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.carText}>Promo Code Discount</Text>
          <Text style={styles.orderText}>-$0</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.carText}>Total</Text>
          <Text style={styles.priceText}>$570</Text>
        </View>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginVertical: 20,
    textTransform: "uppercase",
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
  CardContainer: {
    borderColor: "black",
    borderWidth: 5,
    paddingVertical: 13,
    paddingHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  summaryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
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
