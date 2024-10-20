import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Field() {
  return (
    <View style={styles.container}>
      <Icon name='search' size={20} color='black' style={styles.icon} />
      <TextInput
        placeholder="Search conditions doctors..."
        style={styles.textinput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth:2,
    borderRadius: 10,
    padding: 10,
    marginTop: 55, 
    marginHorizontal: 20, 
  },
  textinput: {
    flex: 1,
    paddingLeft: 10,
    paddingVertical: 5, 
     fontSize: 20,
  },
  icon: {
    marginRight: 10,
  },
});