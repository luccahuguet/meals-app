import { View, Text, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealtemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealtemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
