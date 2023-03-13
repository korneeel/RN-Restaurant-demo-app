import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigatior() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#cee3f8" },
        headerTintColor: "black",
        sceneContainerStyle: { backgroundColor: "#ffffff" },
        drawerContentContainerStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreens}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

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
            name="drawer"
            component={DrawerNavigatior}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
