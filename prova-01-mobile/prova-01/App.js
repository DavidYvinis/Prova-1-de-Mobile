import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// You can import from local files
import AssetExample from './components/AssetExample';
// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';
import Questao01A from "./components/Questao01/Questao01A.jsx"
import Questao01B from "./components/Questao01/Questao01B.jsx"
//import Questao01 from "./components/Questao01/Questao01.jsx"
import Questao2 from "./components/Questao02/Questao2.jsx"
import Questao3 from "./components/Questao03/Questao3.jsx"
import Questao4 from "./components/Questao04/Questao4.jsx"


// Questão 1
export default function App() {
  return (
    <View>
    <Questao01A/>
    <Questao01B/>
    <Questao2/>
    <Questao3/>
    <Questao4/>
    
    </View>   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
