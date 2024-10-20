import React from 'react'; 
import { View, StyleSheet, } from 'react-native'; 
import Field from './components/Field.jsx'; 
import Text from './components/Text.jsx'; 
import Doctorbox from './components/Doctorbox.jsx';

const Mycomponent = () => {
  return (
    <View style={styles.container}>
      <Field />
      <Text /> 
      
      <View style={styles.row}>
        <Doctorbox 
            name='Dr. John Smith' 
            specialization='Dermatologist' 
            rating='4.9'
             icon ='star'
             
           
        />
        <Doctorbox 
            name='Dr. Anna Dinn' 
            specialization='psychologist' 
            rating='4.9'
               icon ='star'
        />
      </View>
      
      <View style={styles.row}>
        <Doctorbox 
            name='Dr. Angela Reyaz' 
            specialization='Therapist' 
            rating='4.8' 
               icon ='star'
        />
        <Doctorbox 
            name='Dr. Chris Bronte' 
            specialization='Dentist' 
            rating='5.0' 
               icon ='star'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10, 
  },
});

export default Mycomponent;

