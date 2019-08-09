import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstPropsScreen from './screens/FirstPropsScreen';
import FirstStateScreen from './screens/FirstStateScreen';
import SecondePropsScreen from './screens/SecondePropsScreen';
import StyleScreen from './screens/StyleScreen';
import HeightAndWidthScreen from './screens/HeightAndWidthScreen';

export default function App() {
  return (
    <React.Fragment>
      {/* <FirstPropsScreen />
      <StyleScreen />
      <SecondePropsScreen />
      <FirstStateScreen /> */}
      <HeightAndWidthScreen />
      <View style={{flex:2,backgroundColor:'pink'}} />
      <HeightAndWidthScreen />
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
