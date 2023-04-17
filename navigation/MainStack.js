import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screen/Home'
import MatchPage from '../screen/MatchPage'
import MessagePage from '../screen/MessagePage'
import Notify from '../screen/Notify'
import Login from '../screen/Login'
const Stack = createNativeStackNavigator()

function MainStack() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
            }}>
          <Stack.Screen
            name='Login'
            component={Login}
          />
          <Stack.Screen 
            name="Home" 
            component={Home}
          /> 
          <Stack.Screen
            name ="Match"
            component={MatchPage}
          />
          <Stack.Screen
              name='Message'
              component={MessagePage}
          />
          <Stack.Screen
            name='Notify'
            component={Notify}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default MainStack