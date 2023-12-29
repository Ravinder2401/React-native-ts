import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';

interface HomeScreenProps{
    navigation: StackNavigationProp<RootStackParamsList, 'Home'>
}
const Home = ({navigation}:HomeScreenProps) => {
  return (
    <View>
      <Text>Home</Text>
      <Text onPress={()=>{
        navigation.navigate("About")
      }}>Go to About</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})