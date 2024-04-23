import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    //verylightbrown
    color: "#d7ccc8",
  },
  subtitleContainer: {
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
