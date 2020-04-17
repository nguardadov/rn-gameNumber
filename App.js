import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './components/Header'
import StartGameScreen from "./screens/StartGameScreen"

export default function App() {
  //55054609 numero de estion
  return (
    <View style={styles.container}>
      <Header title="Guess a Number"/>
      <StartGameScreen/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
})
