import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { sendPasswordResetEmail } from "firebase/auth";

const Stack = createNativeStackNavigator();


const ForgetPass = ({ navigation }) => {
  const { height } = useWindowDimensions();
  const [email, setEmail] = useState('');

  const handleForgetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log('Check Your Email');
         window.alert('Check Your Email');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        // ..
      });
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password </Text>
      <Image
        source={require('../assets/signup2.jpg')}
        style={[styles.img, { height: height * 0.45 }]}
        resizeMode='contain'
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity onPress={handleForgetPassword}>
        <Text style={styles.signIn}>Send</Text>
      </TouchableOpacity>
  
      <Text
        style={styles.acc}
        onPress={() => navigation.navigate('Login')}
      >
        Back To Login Page
      </Text>
    </View>
  );
};
export default ForgetPass;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    color: 'darkblue',
  },
  signUp: {
    fontSize: 18,
    backgroundColor: 'lightblue',
    paddingVertical: 13,
    paddingHorizontal: 85,
    borderRadius: 20,
    marginBottom: 30,
    marginTop:20
  },
  signIn: {
    fontSize: 18,
    backgroundColor: '#119390',
    color:"white",
    fontWeight:"bold",
    paddingVertical: 13,
    paddingHorizontal: 85,
    borderRadius: 20,
    marginBottom: 35,
    marginLeft:50,
    marginRight:50
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 5,
    fontSize: 18,
    borderRadius: 20,
    marginBottom:30,
    
  },
  img: {
    width: '50%',
    height: '50%',
    marginBottom: 35,
  },
  acc: {
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 17,
    color: 'black',
  },
});
