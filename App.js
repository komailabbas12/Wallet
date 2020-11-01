import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View } from 'react-native'
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';


import splash from './screen/splash'
import login from './screen/login';
import home from './screen/home';
import search from './screen/search';
import setting from './screen/setting';
import addtocard from './screen/addtocard';
import stock from './screen/stock';


const stackNav = createStackNavigator();
const searchStack = createStackNavigator();
const settingstack = createStackNavigator()
const Tab = createBottomTabNavigator();

const settingstacksf = () => (
  <settingstack.Navigator
    headerMode='none'
  >
    <settingstack.Screen
       name='settingstack'
       component={setting}
    />
    <settingstack.Screen
       name='addtocard'
       component={addtocard}
    />
  </settingstack.Navigator>

)


const searchStack1 = () => (
  <searchStack.Navigator
    headerMode='none'
  >
    <searchStack.Screen
       name="searchs" component={search}
    />
    <searchStack.Screen
      name='stock'
      component={stock}

    />
    
  </searchStack.Navigator>
)


const tab1 = () => (
  <View style={{backgroundColor:"#fff", flex:1 }}>

  
  <Tab.Navigator
  backgroundColor='#fff'
    tabBarOptions={{
      activeTintColor: "#000000",
      inactiveTintColor: 'gray',

      style: {
        backgroundColor: '#FFFFFF',
        marginLeft: '7%',
        marginRight: '7%',
        borderRadius: 20,
        elevation: 10,
      }
    }}>
    <Tab.Screen name="home" component={home}
      options={{
        title: "",
        tabBarIcon: ({ color }) => (
          <AntDesign name='home' size={24} color={color}
            style={{
              ...Platform.select({
                android: {
                  marginTop: 12,
                }
              })
            }}
          />
        )
      }}
    />

    <Tab.Screen name="search" component={searchStack1}
      options={{
        title: "",
        tabBarIcon: ({ color }) => (
          <Feather name='search' size={24} color={color}
            style={{
              ...Platform.select({
                android: {
                  marginTop: 12,
                }
              })
            }}
          />
        )
      }}
    />

    <Tab.Screen name="setting" component={settingstacksf}
      options={{
        title: "",
        tabBarIcon: ({ color }) => (
          <AntDesign name='user' size={24} color={color}
            style={{
              ...Platform.select({
                android: {
                  marginTop: 12,
                }
              })
            }}
          />
        )
      }}
    />


  </Tab.Navigator>
  </View>
);

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
          component={tab1}
        />
      </stackNav.Navigator>
    </NavigationContainer>
    

  )
}