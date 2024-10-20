import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Doctorbox(props) {
   return (
   
    <View style={styles.container}>
      <Icon name="user" size={55} color="grey" style={styles.icon} />
      <Text>{props.name}</Text>

        <Text>{props.specialization}</Text>

      <View
       style={styles.ratingstyle}>
        <Icon name="star" size={18} color="gold" style={styles.starIcon} />
          <Text>{props.rating}</Text>
      
        
        
      
        
        </View>
      </View>
   
  )};

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 180,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    padding: 10,
  },
   
 
    ratingstyle: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 10, 
    padding: 5, 
    backgroundColor: 'purple', // Button background color
    borderRadius: 10, 
  },
 
  starIcon: {
    marginRight: 10,
  },
});
