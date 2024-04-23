import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable style={({ pressed }) => pressed && styles.buttonPressed}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
    margin: 8,
  },
  mealItem: {
    //height: 200,
    //width: "100%",
    backgroundColor: "white",
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});

export default MealItem;
