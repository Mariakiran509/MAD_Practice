import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Field() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Let's find your doctor</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    
  },
  text: {
    fontSize: 24,
    color: 'black',
    
  },
});