import { useContext, React } from "react";
import { View, Text, StyleSheet } from "react-native";
import MealsList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMealsIds = useSelector((state) => state.favorites.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );

  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );
  return (
    <View style={styles.container}>
      {favoriteMeals.length > 0 ? (
        <MealsList items={favoriteMeals} />
      ) : (
        <Text style={styles.noFavoritesText}>
          No favorite meals found. Start adding some!
        </Text>
      )}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoritesText: {
    fontSize: 18,
    color: "white",
  },
});
