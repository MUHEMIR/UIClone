import React from 'react';
import {View, Text} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/BottomTab';


const App = () => {
  return (
    <NavigationContainer>
    <BottomTab />
    </NavigationContainer>

  )
}

export default App;
