import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CompOne from './src/Components/CompOne'

const App = () => {
  return (
    <View>
      <CompOne name={'Ravinder'} email={'ravinder@gmail.com'} age={25}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})