import React,{useState} from "react";
import {View,Text,SafeAreaView,ScrollView,StyleSheet,Image,ImageBackground} from 'react-native';
import Input from '../views/components/Input';
import Button from '../views/components/Button';
import c from "../images/c.png";
import  auth, { provider2 }  from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup ,FacebookAuthProvider} from "firebase/auth";
import { provider } from "../../firebase";
import GoogleButton from 'react-google-button'
import Header from "../views/components/Header";
import { Colors } from "../global/styles";
import { SocialIcon } from "react-native-elements";




const Login=({navigation})=>{

     const signInWithGoogle=()=>{
        signInWithPopup (auth,provider)
        .then((result)=>{
        //   const name=result.user;
          const name=result.user.displayName;
          const email=result.user.email;
          const profilePic=result.user.photoURL;
          
          navigation.navigate("HomeScreen");
          localStorage.setItem("name",name);
          localStorage.setItem("email",email);
          localStorage.setItem("profilePic",profilePic);
      
          
        })  
        .catch((error)=>{
            console.log(error);
        });
      }

      const signInWithFacebook=()=>{
        signInWithPopup (auth,provider2)
        .then((result)=>{
        //   const name=result.user;
          const name=result.user.displayName;
          const email=result.user.email;
          const profilePic=result.user.photoURL;
          
          navigation.navigate("ForgetPass");
          localStorage.setItem("name",name);
          localStorage.setItem("email",email);
          localStorage.setItem("profilePic",profilePic);
      
          
        })  
        .catch((error)=>{
            console.log(error);
        });

      }


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
    
    return(
         <SafeAreaView style={styles.container}>
            {/* <Image source={x}style={styles.img}/> */}
            <View style={styles.head}>
            <Header title={"Login"}type={'arrow-left'} navigation={navigation}/>

            </View>
            
            <ScrollView style={styles.svContainer}>
            <Image style={styles.image} source={c}/>

            <Text style={styles.textTitle}>Login Form</Text>
            <Text style={styles.text1}>Please enter email and password </Text>
            <Text style={styles.text1}> register with your account </Text>
           
            <View style={styles.viewContainer}>
            <Input  iconName="envelope"placeholder="Enter Your E_mail"
            onChangeText={setEmail}onFocus={()=>handelError(null,"email")} error={errors.email} value={email}/>
            <Input iconName="key"placeholder="Enter Your Password" password 
            onChangeText={setPassword}onFocus={()=>handelError(null,"password")} error={errors.password} value={password}/>
            <Button  title="LOGIN" onPress={(handelSignIn)}/>  
            <Text  style={{...styles.text1,textDecorationLine:"underline",fontStyle:"bold",fontSize:17}} onPress={()=>navigation.navigate("ForgetPass")}>Forget Password ?</Text>
            <Text style={{...styles.textTitle,alignSelf:"center",fontSize:27,marginTop:15,color:"black"}}>or</Text>
            <GoogleButton type="dark" style={styles.go} onClick={(signInWithGoogle) }>Sign In With Google</GoogleButton>
            <View>
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style={styles.socialIcon}
                    onClick={(signInWithFacebook) }/>
                
            </View>
            <Text  style={{...styles.text1,textDecorationLine:"underline",fontStyle:"bold",fontSize:17,marginTop:15}} onPress={()=>navigation.navigate("ٌRegistration")}>Don't have account? <Text style={{color:"#ff8c52",}}>Register</Text></Text>
            </View>
            
            </ScrollView>
        </SafeAreaView>
    );
};
const styles=StyleSheet.create({
   
    img:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:null,
        width:null
    },
    head:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:"white"
    },
    svContainer:{
        paddingTop:20,
        paddingHorizontal: 20,
    },
    image:{
        width:200,
        height:200,
        alignSelf:"center",
        marginTop:15,
        flex:true,
        marginTop:30
    },
    text1:{
        fontSize:16,
        fontStyle:"italic",
        color:Colors.grey3,
        textAlign:"center",
    },
    textTitle:{
        fontWeight:"bold",
        color:"darkblue",
        fontSize :20,
        fontWeight:"bold",
        marginBottom:10
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
            marginLeft:55,
            marginRight:55,
            justifyContent:"center",
            alignItems:"center",
            borderRadius:1,
            fontWeight:"bold",
            fontSize:15
            
        },
        text:{
            fontSize:15,
            color:"red"
        },
        socialIcon:{
            marginHorizontal:55,
            borderRadius:0,
            marginTop:12,



        }
        
    
    
});

    export default Login;