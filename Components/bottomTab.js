import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyStack from '../navigation/MainStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen1" component={MyStack} />
    </Tab.Navigator>
  );
}

export default MyTabs;