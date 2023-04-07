import React from "react";
import { View,Text, Button } from "react-native-web";
import Input from "./views/components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from "react-native-web";
// import Button from "./views/components/Button";
import auth, { signInWithGoogle } from "../firebase";
import { Auth } from "firebase/auth";

const HomeScreen=()=> {
  const {userDetails,setUserDetails}=React.useState();
  React.useEffect(()=>{
    getUserData();
  },[]);
  const getUserData=async()=>{
    const userData=await AsyncStorage.getItem("userData");
    if(userData){
      console.log(JSON.parse(userData))
      setUserDetails=JSON.parse(userData);
    }
  }
  const logout=({navigate})=>{
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({userDetails,loggedIn:false})
    )
    navigation.navigate("Login")
  }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', frontSize:20, color:"darkblue",backgroundColor:"white"
    }}>
        <h2>Welcome {auth.currentUser.email} </h2>
        
        <h2>{localStorage.getItem("name")}</h2>
        <h3>{localStorage.getItem("email")}</h3>
        <img src={localStorage.getItem("profilePic")}/>
        <Input/>
        <Button style={style.button} title="Logout" onPress={(logout)=>navigation.navigate("Login")}/> 

      </View>
    );
  }
  const style= StyleSheet.create({
    button:{
        height:55,
        width:"100",
        backgroundColor:"darkblue",
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
    }
  })
  export default HomeScreen;