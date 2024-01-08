import { Text, View } from 'react-native';
import React, { ReactNode, createContext } from 'react';

const context={
    bg:'red',
    color:'white'
}

type MyContextTypes={
    bg:string,
    color:string
}

type StyleProviderProps={
    children:ReactNode
}

export const MyContext = createContext<MyContextTypes>(context)

const StyleContext = ({children}:StyleProviderProps) => {
  return (
    <MyContext.Provider value={context}>
      {children}
    </MyContext.Provider>
  )
}

export default StyleContext
