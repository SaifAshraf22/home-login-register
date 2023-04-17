// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import Registration from './src/screens/Registration';
import Login from './src/screens/Login';
import ForgetPass from './src/screens/ForgetPass';
import WelcomeScreen from './src/screens/WelcomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
        <Stack.Screen name="ٌRegistration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;