import { StyleSheet, Text, View,Dimensions, Image } from 'react-native'
import React,{useState,useRef} from 'react'
import { Colors,parameters,title } from "../global/styles";
import * as Animation from "react-native-animatable"
import {Icon,SocialIcon} from "react-native-elements"
import Button from '../views/components/Button';
// import Swiper from 'react-native-swiper';
import c from "../images/c.png";
import p from "../images/p.png";
import Header from "../views/components/Header";
import { BackgroundImage } from 'react-native-elements/dist/config';

// import Swiper from 'react-native-swiper';
export default function WelcomeScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:"white"}}>

    <BackgroundImage source={p} style={{width:"100%",height:"100%",}}>
      
    <Header title={"Home"}type={'home'} onPress={()=>{"HomeScreen"}}/>
      <View style={{flex:3,justifyContent:'flex-start',alignItems:"center",paddingTop:20}}>
     <View style={styles.image}>
            <Image
                source={c}
                style={styles.image}
            />
          </View>
        {/* <Text style={{fontSize:30,color:Colors.buttons,fontWeight:"bold"  }}>JUST EAT</Text> */}
        <Text style={{fontSize:26,color:"white",fontWeight:"bold",fontFamily:"italic",marginTop:20}}>Fancy Food at Home!  </Text>
      </View>
      
      <View style={{flex:4,justifyContent:"center",marginBottom:40}}>
      <Button style={styles.bt} title="Get Start" onPress={()=>navigation.navigate("Login")}/>  

        {/* <Swiper> */}
          
        {/* </Swiper> */}

      </View>
      </BackgroundImage>
    </View>
  )
}

const styles = StyleSheet.create({

  image:{
    width:200,
    height:200,
    alignSelf:"center",
    marginTop:15,
    
    flex:true,
},
  slide1:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#9006EB'
  },
  bt:{
    height:55,
    width:"100",
    marginHorizontal:80,
    backgroundColor:"#ff8c52",
    marginVertical:10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    marginBottom:80,
    marginTop:-90
  }
  
})