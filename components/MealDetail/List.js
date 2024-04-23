import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    marginVertical: 4,
    marginHorizontal: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "white",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
  },
  itemText: {
    fontSize: 16,
    color: "brown",
    textAlign: "center",
  },
});

export default List;
