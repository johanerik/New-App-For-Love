import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStack from './navigation/MainStack';
//Backend de la app Y Front de la app

const Tab = createBottomTabNavigator();
const App = () => {
  return (
        <MainStack/>
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

  container:{
      alignItems: 'center',

  }

});


export default App;
