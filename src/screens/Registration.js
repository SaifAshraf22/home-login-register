import {Text,SafeAreaView,ScrollView,StyleSheet,Image,} from 'react-native'
import Input from '../views/components/Input';
import c from "../images/c.png"
import React, { useState } from 'react';
import Button from '../views/components/Button';
import { createUserWithEmailAndPassword } from "firebase/auth";
import  auth  from '../../firebase';
import { Colors } from '../global/styles';
import Header from '../views/components/Header';

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
    
    const validate=()=>{
        let isValid=true;

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
    
    const handelOnChange=(text,input)=>{
        setInputs((prevState)=>({...prevState,[input]:text}));
    }
    const handelError=(text,input)=>{
        setErrors((prevState)=>({...prevState,[input]:text}));
    }

    return(
        <SafeAreaView style={style.container}>
            <Header title={"Register"}type={'arrow-left'} navigation={navigation}/>

         <ScrollView contentContainerStyle={style.scrollContainer}>
        
            <Image style={style.image} source={c}/>
            <Text style={style.textTitle}>Registration Form</Text>
            <Text style={style.text1}>Enter Your Details To Register</Text>
            <Input  iconName="user"placeholder="Enter Your Full Name"
            onChangeText={(text)=>handelOnChange(text,"fullname")}onFocus={()=>handelError(null,"fullname")} error={errors.fullname}/>
            <Input  iconName="mobile-alt"placeholder="Enter Your Number"
            onChangeText={(text)=>handelOnChange(text,"phone")}onFocus={()=>handelError(null,"phone")} error={errors.phone}/>
            <Input  iconName="envelope"placeholder="Enter Your E_mail" value={email}
            onChangeText={setEmail}onFocus={()=>handelError(null,"email")} error={errors.email} />
            <Input  iconName="key"placeholder="Enter Your Password" password 
            onChangeText={setPassword}onFocus={()=>handelError(null,"password")} error={errors.password} value={password} />
            <Input  iconName="key"placeholder="Confirm The Password" password
             onChangeText={(text)=>handelOnChange(text,"passwordConfirm")}onFocus={()=>handelError(null,"passwordConfirm")} error={errors.passwordConfirm}/>
        <Button title="Register" onPress={(handelSignUp)}/> 
        <Text style={{...style.text1,textDecorationLine:"underline",fontStyle:"bold",fontSize:17,marginTop:10}}  onPress={()=>navigation.navigate("Login")}>Have Account!<Text style={{color:"#ff8c52",}}>LOGIN</Text> </Text>
        </ScrollView>
        </SafeAreaView>
    );
};

const style=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
    },
    head:{
        flex:1
    },
    scrollContainer:{
        paddingTop:30,
        paddingHorizontal:20,
    },
    textTitle:{
        fontSize:20,
        fontWeight:"bold",
        color:"darkblue",
        marginTop:15,
        marginBottom:15
    },
    text1:{
        fontSize:16,
        fontStyle:"italic",
        color:Colors.grey3,
        textAlign:"center",
        marginBottom:5
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