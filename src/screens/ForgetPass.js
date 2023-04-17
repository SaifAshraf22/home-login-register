import React, { useState } from 'react';

import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '../../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import Header from '../views/components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../views/components/Button';

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
    <SafeAreaView style={styles.container1}>
      <Header title={"Forget Password"}type={'arrow-left'} navigation={navigation}/>
    <View style={styles.container}>
      <Text style={styles.title}>Create New Password </Text>
      <Image
        source={require('../images/signup2.jpg')}
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

     
    </View>
    </SafeAreaView>
  );
};
export default ForgetPass;
const styles = StyleSheet.create({
  container1:{
    flex:1,
    backgroundColor:"white"
  },
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
    backgroundColor: '#ff8c52',
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
    flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:"100%",
        width:"100%"
  },
  acc: {
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: 17,
    color: 'black',
  },
});
