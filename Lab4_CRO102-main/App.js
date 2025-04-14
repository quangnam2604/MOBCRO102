import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import PhotoCapture from "./Bai1/PhotoCapture";
import ImagePickerScreen from "./Bai2/ImagePickerScreen";
import MusicPlayerScreen from "./Bai3/MusicPlayerScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Page1" component={PhotoCapture} />
        <Stack.Screen name="Page2" component={ImagePickerScreen} />
        <Stack.Screen name="Page3" component={MusicPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
