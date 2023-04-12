// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import Registration from './src/Registration';
import Login from './src/Login';
import ForgetPass from './src/ForgetPass';
import Header from './src/views/components/Header';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Login'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ٌRegistration" component={Registration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;