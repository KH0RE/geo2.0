import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, View, Modal, Text, TextInput, Button } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE }  from 'react-native-maps';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import   Users  from './components/users';
import  Registro  from './components/registro';



export default function App() {
 
  const Stack = createStackNavigator();

  return  (
   
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Registro} />
        <Stack.Screen name="List" component={Users} />
      </Stack.Navigator>
    </NavigationContainer>
     
    
      
    
  ) 


};

const styles = StyleSheet.create({




});
