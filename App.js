import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstPropsScreen from './screens/FirstPropsScreen';
import FirstStateScreen from './screens/FirstStateScreen';
import SecondePropsScreen from './screens/SecondePropsScreen';
import StyleScreen from './screens/StyleScreen';

export default function App() {
  return (
    <React.Fragment>
      <FirstPropsScreen />
      <StyleScreen />
      <SecondePropsScreen />
      <FirstStateScreen />
    </React.Fragment>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });
