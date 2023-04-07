import {View,Text,SafeAreaView,ScrollView,StyleSheet,Image,} from 'react-native'
import Input from './views/components/Input';
import c from "../src/images/c.jpg"
import React, { useState } from 'react';
import Button from './views/components/Button';
import Loader from './views/components/loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AlertNotificationRoot, ALERT_TYPE, Dialog,  Toast } from 'react-native-alert-notification';
import Login from './Login';
import { createUserWithEmailAndPassword } from "firebase/auth";
import  auth  from '../firebase';

const Registration =({navigation})=>{
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const handelSignUp=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("done")
    window.alert("successfully")
    register();
    navigation.navigate("Login")

    const user = userCredential.user;
    // ...
})
.catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    validate();
    // window.alert("errorMessage")
});
   }
    const [inputs,setInputs]=React.useState({
        studno:"",
        email:"",
        fullname:"",
        phone:"",
        password:"",
        passwordConfirm:"",
    });
    const [errors,setErrors]=React.useState({ });
    const [Loading,setLoading]=React.useState(false);
    
    const validate=()=>{
        let isValid=true;

        if(!inputs.studno){
            handelError("Please Enter Student Name", "studno")
            isValid=false;
        }
        if(!inputs.email){
            handelError("Please Enter Email Address", "email")
            isValid=false;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handelError("Please Enter Email Address With @ ", "email")
            isValid=false;
        }
        if(!inputs.fullname){
            handelError("Please Enter a Student Full Name", "fullname")
            isValid=false;
        }
        if(!inputs.phone){
            handelError("Please Enter Phone", "phone")
            isValid=false;
        }
        if(!inputs.password){
            handelError("Please Enter Password", "password")
            isValid=false;
        }else if (inputs.password.length<3){
            handelError("Please Enter Password more than 3 characters", "password")
            isValid=false;
        }
        if(!inputs.passwordConfirm){
            handelError("Please Enter Confirm Password", "passwordConfirm")
            isValid=false;
        }else if (inputs.passwordConfirm != inputs.password){
            handelError("The confirm password not match ", "passwordConfirm")
            isValid=false;
        }
        if(isValid) register();
        
    }
    const register=()=>{
        console.log("register");
        console.log(inputs);
        
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Congrats! this is dialog box success',
            button: 'close',
            onHide:()=>{
                navigation.navigate("Login");
            }
          });
        setLoading(true);
        setTimeout(()=>{
            try{
             setLoading(false);
            AsyncStorage.setItem("userData",JSON.stringify(inputs));
            console.log("user successfully created")
       
        }catch(error){}
        },3000);
        
    };
    const handelOnChange=(text,input)=>{
        setInputs((prevState)=>({...prevState,[input]:text}));
    }
    const handelError=(text,input)=>{
        setErrors((prevState)=>({...prevState,[input]:text}));
    }
    return(
        <SafeAreaView style={style.container}>
            {/* <AlertNotificationRoot> */}

            <Loader visible={Loading}/>
         <ScrollView contentContainerStyle={style.scrollContainer}>
            <Image style={style.image} source={c}/>
            <Text style={style.textTitle}>Registration Form</Text>
            <Text style={style.textSubTitle}>Enter Your Details To Register</Text>
            <Input  label="Student Number" iconName="id-badge"placeholder="Enter Your Name" 
            onChangeText={(text)=>handelOnChange(text,"studno")} onFocus={()=>handelError(null,"studno")} error={errors.studno}/>
            <Input  label="Full Name" iconName="user"placeholder="Enter Your Full Name"
            onChangeText={(text)=>handelOnChange(text,"fullname")}onFocus={()=>handelError(null,"fullname")} error={errors.fullname}/>
            <Input  label="Phone Number" iconName="mobile-alt"placeholder="Enter Your Number"
            onChangeText={(text)=>handelOnChange(text,"phone")}onFocus={()=>handelError(null,"phone")} error={errors.phone}/>
            <Input  label="Email Address" iconName="envelope"placeholder="Enter Your E_mail" value={email}
            onChangeText={setEmail}onFocus={()=>handelError(null,"email")} error={errors.email} />
            <Input  label="Password" iconName="key"placeholder="Enter Your Password" password 
            onChangeText={setPassword}onFocus={()=>handelError(null,"password")} error={errors.password} value={password} />
            <Input  label="Confirm Password" iconName="key"placeholder="Confirm The Password" password
             onChangeText={(text)=>handelOnChange(text,"passwordConfirm")}onFocus={()=>handelError(null,"passwordConfirm")} error={errors.passwordConfirm}/>
        <Button title="Register" onPress={(handelSignUp)}/> 
        <Text  style={style.textRegister} onPress={()=>navigation.navigate("Login")}>Have Account! </Text>
        {/* <Button title="Login" onPress={()=>navigation.navigate("Login")}/>  */}
        </ScrollView>
        {/* </AlertNotificationRoot> */}
        </SafeAreaView>
    );
};
const style=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
    },
    scrollContainer:{
        paddingTop:30,
        paddingHorizontal:20,
    },
    textTitle:{
        fontSize:30,
        fontWeight:"bold",
        color:"darkblue"
    },
    textSubTitle:{
        fontSize:20,
        color:"black",
        marginVertical:10
    },
    image:{
        width:250,
        height:250,
        alignSelf:"center"
    },
    textRegister:{
        textAlign:"center",
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        marginTop:15,
        marginBottom:10
    },
})

export default Registration;