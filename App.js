import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,AppRegistry, registerRootComponent  } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen';
import HomeSceen from './screens/HomeScreen'
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();


const App= ({ navigation }) => {
  const [isloggedin,setLogged] = useState(null)

  const detectLogin= async ()=>{
     const token = await AsyncStorage.getItem('token')
     if(token){
         setLogged(true)
     }else{
         setLogged(false)
     }
  
  }
 useEffect(()=>{
    detectLogin()
 },[])


 return (
   <NavigationNativeContainer>
     <Stack.Navigator
     headerMode="none"
     >

           <Stack.Screen name="loading" component={LoadingScreen} />
           <Stack.Screen name="home" component={HomeSceen} />
           <Stack.Screen name="login" component={LoginScreen} />
           <Stack.Screen name="signup" component={SignupScreen} />
       
       
     </Stack.Navigator>
   </NavigationNativeContainer>

 );
};


export default App;
