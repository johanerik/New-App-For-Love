import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Esta es la Screen 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Ir a Screen 2</Text>
      </TouchableOpacity>
    </View>
  );
}

Screen1.navigationOptions = {
  headerShown: false,
};
