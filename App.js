import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "brown",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3e2723",
        },
        drawerActiveTintColor: "#3e2723",
        drawerActiveBackgroundColor: "#a1887f",
        drawerInactiveTintColor: "white",
        drawerStyle: {
          backgroundColor: "#3e2723",
        },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="restaurant" size={23} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: (props) => (
            <Ionicons name="star" size={23} color={props.color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "brown",
            },
            headerTintColor: "white",
            cardStyle: {
              backgroundColor: "#3e2723",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "Meal Details",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {},
// });
