import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const App = ()=> {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signIn" component={SignIn} options={{headerShown:false}}/> 
        <Stack.Screen name="signUp" component={SignUp} options={{headerShown:false}}/>
      </Stack.Navigator>
</NavigationContainer>
  );
}



export default App;