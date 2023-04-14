import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CircleButton = ({ onPress, imageSource, backgroundColor }) => {
  return (
    <View style={[styles.circleButtonContainer, { backgroundColor }]}>
      <TouchableOpacity style={styles.circleButton} onPress={onPress}>
        <Image source={imageSource} style={styles.circleButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButtonImage: {
    width: 30,
    height: 30,
  },
});

export default CircleButton;
