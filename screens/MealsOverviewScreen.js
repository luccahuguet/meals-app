import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList/MealList";
import { useEffect } from "react";

function MealsOverviewScreen({ navigation, route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  useEffect(() => {
    const categoryTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
