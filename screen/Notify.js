import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//Backend de la app Y Front de la app
const AppHome = () => {
  return (
    
    <SafeAreaView style = {{flex: 1}}>
      <StatusBar backgroundColor='#EBF3DD' />
       

    </SafeAreaView>
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

  container:{
      alignItems: 'center',

  }

});


export default AppHome;
