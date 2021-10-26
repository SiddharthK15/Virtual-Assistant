import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { AlanView } from './AlanSDK.js';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  render() {
  <AlanView projectid={'d6a2d7d7ef80c5e9e15ee699505d97b22e956eca572e1d8b807a3e2338fdd0dc/stage'}/>
}

componentDidMount() {
  /// Handle commands from Alan Studio
  alanEventEmitter.addListener('onCommand', (data) => {
    console.log(`onCommand: ${JSON.stringify(data)}`);
  });
}

componentWillUnmount() {
  alanEventEmitter.removeAllListeners('onCommand');
}

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
