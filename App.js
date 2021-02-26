import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StockContainer from './components/StockContainer';


export default function App() {

  return (
    <View style={styles.screen}>
      <View>
        <StockContainer />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
