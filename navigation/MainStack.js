import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screen/Home'
import MatchPage from '../screen/MatchPage'
import MessagePage from '../screen/MessagePage'
import Notify from '../screen/Notify'
import Login from '../screen/Login'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MainStack() {
    return (
      <NavigationContainer>
        <Tab.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
          <Tab.Screen
            name='Login'
            component={Login}
          />
          <Tab.Screen 
            name="Home" 
            component={Home}
          /> 
          <Tab.Screen
            name ="Match"
            component={MatchPage}
          />
          <Tab.Screen
              name='Message'
              component={MessagePage}
          />
          <Tab.Screen
            name='Notify'
            component={Notify}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
export default MainStack