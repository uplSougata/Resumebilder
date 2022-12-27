/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BackHandler } from "react-native";
import Homescreen from './components/screens/homescreen';
import Signinscreen from './components/screens/signinscreen';
import Presonaldetails from './components/screens/personaldetails';

import Educationinformation from './components/screens/educationinformation';
const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp() 
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
 

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Educationinformation">
    <Stack.Screen name="Educationinformation" component={Educationinformation} options = {{ headerBackVisible:false,headerShown: false}}/>
    <Stack.Screen name="Personaldetails" component={Presonaldetails} options = {{ headerBackVisible:false,headerShown: false}}/>
    <Stack.Screen name="Signinscreen" component={Signinscreen} options = {{ headerBackVisible:false,headerShown: false}}/>
      <Stack.Screen name="Homescreen" component={Homescreen} options = {{ headerBackVisible:false,headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
 
  )
};

export default App;
