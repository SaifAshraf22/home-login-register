import React,{useState} from "react";
// import { SafeAreaView,View,Text,StyleSheet,ScrollView,Image } from "react-native-web";
import {View,Text,SafeAreaView,ScrollView,StyleSheet,Image, Alert,ImageBackground} from 'react-native';

// import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Input from './views/components/Input';
import Button from './views/components/Button';
import Loader from './views/components/loader';
import c from "../src/images/c.jpg";
import { ALERT_TYPE, Dialog } from "react-native-alert-notification";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  auth  from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "../firebase";
import GoogleButton from 'react-google-button'




const Login=({navigation})=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handelSignIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    console.log("done");
    window.alert("successfully")
    const user = userCredential.user;
    navigation.navigate("HomeScreen")
    validate();
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // window.alert("ERROR")
    validate()
  });
       }

    const [inputs,setInputs]=React.useState({
        email:"",
        password:"",
    });
    const [errors,setErrors]=React.useState({ });
    const [Loading,setLoading]=React.useState(false);
    const validate= async()=>{
        let isValid=true;

        if(!inputs.email){
            handelError("Please Enter Email Address", "email")
            isValid=false;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handelError("Please Enter Email Address With @ ", "email")
            isValid=false;
        }
        if(!inputs.password){
            handelError("Please Enter Password", "password")
            isValid=false;
        }else if (inputs.password.length<3){
            handelError("Please Enter Password more than 3 characters", "password")
            isValid=false;
        }
        if(isValid) login();
    }
    const handelOnChange=(text,input)=>{
        setInputs((prevState)=>({...prevState,[input]:text}));
    }
    const handelError=(text,input)=>{
        setErrors((prevState)=>({...prevState,[input]:text}));
    }
    const login=()=>{
        console.log("login");
        console.log(inputs);

        setLoading(true);
        setTimeout(async()=>{
            try{
             setLoading(false);
             let userData=await AsyncStorage.getItem("userData");
             
             if(userData){
                 userData=JSON.parse(userData);
                console.log("userData");
             console.log(userData);
            if(
                inputs.email==userData.email&&
                inputs.password==userData.password
            ){   
                navigation.navigate("HomeScreen");
                AsyncStorage.setItem(
                    "userData",
                    JSON.stringify({userData,loggedIn:true})
                )
            }
            
            else{
                Dialog.show({
                    type:ALERT_TYPE.DANGER,
                    title:"ERROR",
                    textBody:"invalided",
                    button:"Close"
                })
            }
        }else{
            console.log("No Account")
            Dialog.show({
                type:ALERT_TYPE.DANGER,
                title:"ERROR",
                textBody:"No Account Found",
                button:"Close"
            })
        }
    }catch(error){
        console.log("Error"+error)
        Dialog.show({
            type:ALERT_TYPE.DANGER,
            title:"ERROR",
            textBody:error,
            button:"Close"
        });
    }
        },3000);
        
    };
    return(
       <ImageBackground source={require('../assets/Back.jpg')} style={{
        height:1000
       }}>
         <SafeAreaView style={styles.container}>
            {/* <AlertNotificationRoot> */}
            <Loader visible={Loading}/>
            <ScrollView style={styles.svContainer}>
            <Image style={styles.image} source={c}/>
                <Text style={styles.welc}>Welcome To Faculty Of Science</Text>
            <Text style={styles.textTitle}>Login Form</Text>
            <View style={styles.viewContainer}>
            <Input  label="Email Address" iconName="envelope"placeholder="Enter Your E_mail"
            onChangeText={setEmail}onFocus={()=>handelError(null,"email")} error={errors.email} value={email}/>
            <Input  label="Password" iconName="key"placeholder="Enter Your Password" password 
            onChangeText={setPassword}onFocus={()=>handelError(null,"password")} error={errors.password} value={password}/>
            <Button title="Login" onPress={(handelSignIn)}/>  
            <Text  style={styles.textRegister} onPress={()=>navigation.navigate("ForgetPass")}>Forget Password ?</Text>
            {/* <Button title="Login" onPress={() =>navigation.navigate("HomeScreen")}/> */}
            <Text style={styles.welc}>or</Text>
            <GoogleButton type="dark" style={styles.go} onClick={(signInWithGoogle)}>Sign In With Google</GoogleButton>
           
            <Text  style={styles.textRegister} onPress={()=>navigation.navigate("ٌRegistration")}>Don't have account? Register</Text>
            </View>
            </ScrollView>
            {/* </AlertNotificationRoot> */}
        </SafeAreaView>
       </ImageBackground>
    );
};
const styles=StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:"white"
    },
    svContainer:{
        paddingTop:20,
        paddingHorizontal: 20,
    },
    image:{
        width:250,
        height:250,
        alignSelf:"center"
    },
    welc:{
        fontSize:35,
        fontStyle:"italic",
        color:"#119390",
        alignItems:"center",
        textAlign:"center"

    },
    textTitle:{
        fontSize:30,
        fontWeight:"bold",
        color:"darkblue"
    },
    viewContainer:{
        paddingVertical: 20,
        frontSize:15
    },
    textRegister:{
        textAlign:"center",
        fontSize:20,
        color:"black",
        fontWeight:"bold",
        marginTop:15,
        marginBottom:10
    },
    go:{
        
         //   height:50,
            width:"5",
          // backgroundColor:"GREEN",
            marginTop:13,
            marginLeft:400,
            marginRight:400,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:1,
            color:"white",
            fontWeight:"bold",
            fontSize:18
            
        },
        text:{
            fontSize:15,
            color:"red"
        }
        
    
    
});

    export default Login;