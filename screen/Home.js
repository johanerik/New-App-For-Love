import React, { useState } from 'react';
import { View, Text, StyleSheet,TextInput, StatusBar, TouchableOpacity, Image ,Animated, KeyboardAvoidingView   } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SearchInput from '../Components/SearchInput';
//Backend de la app
const App = ({navigation}) => {

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

 const [searchText, setSearchText] = useState('');
 //Todo el front de la app
  return (

    <KeyboardAwareScrollView  style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Cambio de color de barra de tareas */}
      <StatusBar backgroundColor='#7CA539'/>
      {/* header con boton,notify, y search */}
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image source={require('../assets/icons/menu.png')} style={styles.icon} ></Image>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/icons/notify.png')} style={styles.iconN} ></Image>
            </TouchableOpacity>
            <Text style={styles.textHome}>Home Love</Text>
            <View style={[styles.containerImg, { width: 35, height: 35 }]}>
              <Image source={require('../assets/icons/lOGOaPP.png')} style={[styles.image, { width: 35, height: 35 }]}/>
            </View>
        </View>
         {/* TextInput*/}
        <View style={styles.inputContainer}>    
            <SearchInput 
              placeholder="Buscar  "
              onChangeText={(text) => setSearchText(text)}
              value={searchText}
            />    
        </View>
       {/* Contenido general de la apliacion*/}
        <View style={styles.content}>
          
        </View>

    </KeyboardAwareScrollView>
  );
};
//Estilos de botones, header, footer y container
const styles = StyleSheet.create({
  containerImg: {
    borderRadius: 1000, 
    overflow: 'hidden',
    top:75,
    left:60
  },
  image: {
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: '#7CA539',
  },
  contentContainer: {
    flexGrow:1,
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#7CA539',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerContainer: {
    top: -25,
    left: -170
  },
  content: {
    width: 400,
    height:800,
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 200,
    position: 'absolute',
    top: 120
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    position: 'absolute',
    top: -5,
    left:13
  },
  iconN:{
    width: 24,
    height: 24,
    tintColor: '#fff',
    position: 'absolute',
    top: -5,
    left:343
  },
  inputContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    top: 12
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    width: '110%',
    fontSize: 16,
    backgroundColor: '#FFFFFF'
  },
   textHome:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: -110,
    marginRight:-90,
    right:-106,
    top:-6,
    color: '#FFFFFF'
   }
});

export default App;
