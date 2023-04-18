import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity,Alert } from 'react-native';

import CircleButton from './Components/CircleButton';

import {getAut, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './Components/firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import AppsS from './screen/AppS'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function LoginScreen () {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    //const navigation = useNavigation();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log('Accouent created');
            const user  =  userCredential.user;
            console.log(user);
        })
        .catch(error => {
            Alert.alert(error);
        })
    }
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log('sign in');
            const user  =  userCredential.user;
            console.log(user);
            //navigation.navigate('Home');
            Alert.alert('Bienvenido','Login Susscefuly');
        })
        .catch(error => {
            Alert.alert(error.message);
        })
    }
    return (
        <Home/>
    );
  };
  const Tab = createBottomTabNavigator();
 

//Estilos de botones, header, footer y container

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
      },
      titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#195914'
      },
      inputContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '100%',
        fontSize: 16,
      },
      boton: {
        backgroundColor: '#45A73E',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
      },
      botonR: {
        backgroundColor: '#0310DF',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '100%',
        alignItems: 'center',
      },
      botonTexto: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
      },
});


export default LoginScreen;
