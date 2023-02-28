import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#cee3f8" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "#ffffff" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreens}
            options={{
              title: "Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverViewScreen}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
