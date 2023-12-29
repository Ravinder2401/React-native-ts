import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';

interface AboutScreenProps{
    navigation: StackNavigationProp<RootStackParamsList, 'About'>
}

const About = ({navigation}:AboutScreenProps) => {
  return (
    <View>
      <Text>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})