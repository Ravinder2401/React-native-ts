import { StyleSheet, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../../App';
import { MyContext } from './StyleContext';

interface HomeScreenProps{
    navigation: StackNavigationProp<RootStackParamsList, 'Home'>
}

interface User {
  name: string,
  age: number,
  email:string
}

interface Items {
  title: string,
  price: number,
  id: string
}

const Home = ({navigation}:HomeScreenProps) => {

  // use context example
  const value = useContext(MyContext)

  // typescript state decleration
  const [counter,setCounter] = useState<number>(0);
  const [name,setName] = useState<string>('');
  const [isLoaded,setIsLoaded] = useState<boolean>(false);
  const [user,setUser] = useState<User>({name:'',age:0,email:''});
  const [items,setItems] = useState<Items[]>([]);
  const [details,setDetails] = useState<null>(null);
  
  return (
    <View>
      <Text style={{color:value.color,backgroundColor:value.bg}}>Home</Text>
      <Text style={{margin:20,backgroundColor:'lightgrey',padding:10,textAlign:'center'}} onPress={()=>{
        navigation.navigate("About")
      }}>Go to About</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})