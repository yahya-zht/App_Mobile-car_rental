import { AntDesign } from "@expo/vector-icons";

import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { Calendar } from "react-native-calendars";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";

const BookingDate = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [dateDepart, setDateDepart] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [returnTime, setReturnTime] = useState("17:00");

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleDayPress = (day) => {
    if (!dateDepart || (dateDepart && dateFin)) {
      setDateDepart(day.dateString);
      setDateFin("");
    } else if (dateDepart && !dateFin) {
      setDateFin(day.dateString);
    }
  };

  const getMarkedDates = () => {
    let markedDates = {};
    if (dateDepart) {
      markedDates[dateDepart] = { selected: true, selectedColor: "#9bff00" };
    }
    if (dateFin) {
      markedDates[dateFin] = { selected: true, selectedColor: "#9bff00" };
      // Mark all dates between dateDepart and dateFin
      let current = moment(dateDepart).add(1, "day");
      while (current.isBefore(moment(dateFin))) {
        markedDates[current.format("YYYY-MM-DD")] = {
          selected: true,
          selectedColor: "#9bff00",
        };
        current = current.add(1, "day");
      }
    }
    return markedDates;
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
        <Text style={[styles.title, { textAlign: "center" }]}>Date & Time</Text>
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Book with Driver</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#9bff00" }}
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={getMarkedDates()}
        theme={{
          calendarBackground: "#27262b",
          dayTextColor: "#ffffff",
          monthTextColor: "#9bff00",
          arrowColor: "#9bff00",
          textDisabledColor: "#555555",
          todayTextColor: "#9bff00",
          selectedDayTextColor: "#000000",
        }}
        style={styles.calendar}
      />
      <View style={[styles.pickerContainer, { flexDirection: "row" }]}>
        <View style={styles.pickerColumn}>
          <Text style={styles.pickerLabel}>Pick-up time</Text>
          <Picker
            selectedValue={pickupTime}
            style={styles.picker}
            onValueChange={(itemValue) => setPickupTime(itemValue)}
          >
            <Picker.Item label="7:00" value="7:00" />
            <Picker.Item label="8:00" value="8:00" />
            <Picker.Item label="9:00" value="9:00" />
            <Picker.Item label="10:00" value="10:00" />
            <Picker.Item label="11:00" value="11:00" />
            <Picker.Item label="12:00" value="12:00" />
            <Picker.Item label="13:00" value="13:00" />
            <Picker.Item label="14:00" value="14:00" />
            <Picker.Item label="15:00" value="15:00" />
            <Picker.Item label="16:00" value="16:00" />
          </Picker>
        </View>
        <View
          style={[
            styles.pickerColumn,
            { borderLeftWidth: 1, borderColor: "#ccc" },
          ]}
        >
          <Text style={styles.pickerLabel}>Return time</Text>
          <Picker
            selectedValue={returnTime}
            style={styles.picker}
            onValueChange={(itemValue) => setReturnTime(itemValue)}
          >
            <Picker.Item label="17:00" value="17:00" />
            <Picker.Item label="18:00" value="18:00" />
            <Picker.Item label="19:00" value="19:00" />
            <Picker.Item label="20:00" value="20:00" />
            <Picker.Item label="21:00" value="21:00" />
            <Picker.Item label="22:00" value="22:00" />
            <Picker.Item label="23:00" value="23:00" />
            <Picker.Item label="24:00" value="24:00" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Payment");
        }}
      >
        <Text style={styles.buttonText}>Booking</Text>
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
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: "#ffffff",
  },
  calendar: {
    marginBottom: 20,
    borderColor: "#9bff00",
    borderRadius: 20,
    borderWidth: 5,
    paddingBottom: 10,
  },
  button: {
    backgroundColor: "#9bff00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#27262b",
    fontSize: 18,
    fontWeight: "bold",
  },
  pickerContainer: {
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#9bff00",
    marginVertical: 20,
    borderRadius: 5,
    padding: 10,
  },
  pickerColumn: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  pickerLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#ffffff",
    marginBottom: 10,
  },
  picker: {
    color: "#ffffff",
    width: 150,
    backgroundColor: "#444",
    borderRadius: 20,
  },
});

export default BookingDate;
