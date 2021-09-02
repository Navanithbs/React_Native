import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";
import StartGameScreen from './components/startgamescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="!!...GUESS A NUMBER...!!"/>
      <View>
        <StartGameScreen/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    alignItems:'center',
    backgroundColor:"pink",
    justifyContent:'center'
  }
});
