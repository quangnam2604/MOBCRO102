import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screen/HomeScreen';
import Bai1Wrapper from './Screen/Bai1Wrapper';
import Bai2Wrapper from './Screen/Bai2Wrapper';
import Bai3Wrapper from './Screen/Bai3Wrapper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Bài 1" component={Bai1Wrapper} />
        <Stack.Screen name="Bài 2" component={Bai2Wrapper} />
        <Stack.Screen name="Bài 3" component={Bai3Wrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
