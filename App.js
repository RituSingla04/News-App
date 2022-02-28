import {StyleSheet, View, Text, StatusBar} from 'react-native';
import React from 'react';
import InshortTabs from './Components/InshortTabs';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> hi </Text>
      <InshortTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
