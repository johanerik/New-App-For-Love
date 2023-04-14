import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image ,Animated  } from 'react-native';
import * as Animatable from 'react-native-animatable';
//Backend de la app
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(new Animated.Value(100));
  const [footerWidth, setFooterWidth] = useState(new Animated.Value(400));
  const [rotateDeg, setRotateDeg] = useState('0deg');

  const handleMenuPress = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      Animated.timing(headerHeight, {
        toValue: 100,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(footerWidth, {
        toValue: 400,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(headerHeight, {
        toValue: 500,
        duration: 500,
        useNativeDriver: false,
      }).start();
      Animated.timing(footerWidth, {
        toValue: 500,
        duration: 500,
        useNativeDriver: false,
      }).start();
      if (!isMenuOpen) {
        setRotateDeg('0deg');
      } else {
        setRotateDeg('90deg');
      }
    }
  };

  const headerStyle = {
    backgroundColor: isMenuOpen ? '#7CA539' : '#7CA539',
  };

  const footerStyle = {
    backgroundColor: isMenuOpen ? '#7CA539' : '#7CA539',
  };

  const animatedHeaderStyle = {
    ...styles.header,
    ...headerStyle,
    height: headerHeight,
    borderBottomLeftRadius: isMenuOpen ? 30 : 30,
    borderBottomRightRadius: isMenuOpen ? 30 : 30,
  };
  
  const menuButtonStyle = {
    transform: [{ rotate: rotateDeg }],
  };
//Todo el front de la app
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#7CA539' />
    <Animated.View style={animatedHeaderStyle}>
      <TouchableOpacity style={[styles.menuButton, menuButtonStyle]} onPress={handleMenuPress}>
        <Image source={require('./assets/icons/menu.png')} style={[styles.icon, { width: 50, height: 50 }]} />
      </TouchableOpacity>
      <Text style={styles.headerText}>True Love</Text>
      <TouchableOpacity style={styles.heartButton}>
        <Image source={require('./assets/icons/heart.png')} style={[styles.icon, { width: 50, height: 50 }]} />
      </TouchableOpacity>
    </Animated.View>
    <View style={styles.content}>
      <Image source={require('./assets/img/app.png')} style={[styles.img, { width: 390, height: 390}]} ></Image>
    </View>
    <Animated.View style={styles.footer}>
      <TouchableOpacity style={styles.mess}>
        <Image source={require('./assets/icons/date.png')} style={[styles.icon, { width: 55, height: 55}]}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.date}>
        <Image source={require('./assets/icons/datec.png')} style={[styles.icon, { width: 55, height: 55}]}/>
      </TouchableOpacity>
    </Animated.View>
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
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#7CA539',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  menuButton: {
    position: 'absolute',
    left: 20,
    top:25
  },
  heartButton: {
    position: 'absolute',
    right: 20,
    top:25
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    top:35
  },
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EBF3DD',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  footer: {
    height: 90,
    width: '100%',
    backgroundColor: '#7CA539',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  mess:{
    position: 'absolute',
    right: 60,
    top: 20
  },
  date:{
    position: 'absolute',
    right: 170,
    top: 20
  },
  img:{
    position: 'absolute',
    right:2,
    top:100

  }

});

export default App;
