import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Home';
import About from './src/Screens/About';


export type RootStackParamsList = {
  Home:undefined,
  About:undefined
}

const Stack = createStackNavigator<RootStackParamsList>()

const App = () => {
  return (
    <>
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='About' component={About}/>
    </Stack.Navigator>
   </NavigationContainer>
   </>
  )
}

export default App

const styles = StyleSheet.create({})