import { StyleSheet, Text, View } from 'react-native';
import React, { useReducer } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';

interface AboutScreenProps{
    navigation: StackNavigationProp<RootStackParamsList, 'About'>
}

type MyState={
  count:number
}

const initialState:MyState={
  count:0
}

type Action={
  type:'Increment' | 'Decrement'
}

const reducer = (state:MyState,action:Action):MyState => {
  switch(action.type) {
    case 'Increment':
      return {...state, count: state.count + 1};
    case 'Decrement':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
}

const About = ({navigation}:AboutScreenProps) => {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Text>{state.count}</Text>
      <Text onPress={()=>dispatch({type:'Increment'})} style={{padding:10,borderWidth:1,color:'black'}}>Change Count</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({})