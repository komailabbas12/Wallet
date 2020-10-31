import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splash from './screen/splash'
import login from './screen/login';
import home from './screen/home';


const stackNav = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stackNav.Navigator
        headerMode='none'
      >
        <stackNav.Screen
          name='splash'
          component={splash}
        />
        <stackNav.Screen
          name='login'
          component={login}
        />
        <stackNav.Screen
          name='home'
          component={home}
        />
      </stackNav.Navigator>
    </NavigationContainer>

  )
}