import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

const CategoryGridTile = ({ title, color, onSelect }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onSelect}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    backgroundColor: "white",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 10,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  title: {
    fontSize: 18,
    textAlign: "right",
  },
});
export default CategoryGridTile;
