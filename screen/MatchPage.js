import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated  } from 'react-native';
import CircleButton from '../Components/CircleButton';

//Backend de la app
const Match = ({navigation}) => {
 
//Todo el front de la app
  return (
  <View style={styles.container}>
    <StatusBar backgroundColor='#EBF3DD' />
    <View style={styles.btnTop}>

    <CircleButton
        onPress={() => navigation.navigate('Home')}
        imageSource={require('../assets/icons/back.png')}
        backgroundColor="#7CA539"
      />

    </View>
 
          
  </View>
  
  
  );
};
//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EBF3DD',
        alignItems: 'center',
        justifyContent: 'center',
      },
      content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#EBF3DD',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
      },
      btnTop:{
        position:'absolute',
        top:10,
        left:25,  
      }
});


export default Match;
