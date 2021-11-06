import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen';
import Search from '../screens/Search';
import Reels from '../screens/Reels';
import Shop from '../screens/Shop';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();


const BottomTab = () => {
  return (
  
  <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle: {position:  'absolute', backgroundColor:'#000000' } }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => (
          <Image source={require('../assets/home.png')} />
        ),

      }} />
      <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: () => (
          <Image source={require('../assets/search.png')} />
        ),
      }} />
      <Tab.Screen name="Reels" component={Reels} options={{
        tabBarIcon: () => (
          <Image source={require('../assets/reels.png')} />
        ),
      }} />
      <Tab.Screen name="Shop" component={Shop} options={{ 
        tabBarIcon: () => (
          <Image source={require('../assets/shop.png')} />
        ),
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => (
          <Image source={require('../assets/profile.png')} />
        )
      }} />
    </Tab.Navigator>
    );
    }

    

    

    export default BottomTab;