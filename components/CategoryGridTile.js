import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const CategoryGridTile = ({ title, color, onSelect }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {},
  container: {},
  title: {},
});
export default CategoryGridTile;
