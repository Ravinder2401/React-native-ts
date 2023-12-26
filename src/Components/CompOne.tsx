import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface MyProps {
    name:string,
    email:string,
    age:number
}
// const CompOne = (props:MyProps) => {
const CompOne = ({name,email,age}:MyProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{age}</Text>
    </View>
  )
}

export default CompOne

const styles = StyleSheet.create({})