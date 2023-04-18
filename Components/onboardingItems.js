import React from 'react';
import { View, Text,TouchableOpacity, Image, StyleSheet ,FlatList, useWindowDimensions} from 'react-native';
import slides from '../data/slides';





export default onboardingItems = ({item}) => {
    const {width} = useWindowDimensions();

  return (
    <View style={[styles.container,{width}]} >
       <Image source={item.img} style={[styles.image, { width: 290, height: 150 }]}   />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
      flex:2,
      justifyContent:'center',
      alignItems: 'center',
      borderRadius: 10, 
      overflow: 'hidden',
    },
    image:{
        resizeMode: 'cover',
        borderRadius:30,
        top:0,
        marginHorizontal:0
    }
});


