import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BookingLogScreen = () => {
  return (
    <View style={styles.center}>
      <Text>Booking Log screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default BookingLogScreen;