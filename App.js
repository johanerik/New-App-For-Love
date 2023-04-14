import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainStack from '../faceapp/navigation/MainStack';

//Backend de la app Y Front de la app
const App = () => {
  return (
    <SafeAreaView style = {{flex: 1}}>

        <MainStack />

    </SafeAreaView>
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

  container:{
      alignItems: 'center',

  }

});


export default App;
