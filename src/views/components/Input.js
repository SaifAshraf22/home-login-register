import { Text,View,StyleSheet,TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from "react";
const Input=({label,iconName,password,error,onFocus=()=>{},...props})=>{
    const [hidePassword,setHidePassword]=React.useState(password);
    const [isFocused,setIsFocused]=React.useState(false);
    return(
        <View style={style.container}>
            <Text>{label}</Text>
            <View style={[style.input ,{borderColor: isFocused ? "darkblue":"powderblue"}]}>
                <Icon name={iconName} style={style.icon}/>
            <TextInput
                onFocus={()=> {
                    onFocus();
                    setIsFocused(true);
                }}
                onBlur={()=>setIsFocused(false)}
            style={style.textInput} secureTextEntry={hidePassword} {...props}/>
            
            {password &&(
                 <Icon
                  onPress={()=>setHidePassword(!hidePassword)}
             name={hidePassword ? "eye" : "eye-slash"} 
             style={style.iconEye}
             />
             )}
            

        </View>
        {error&&<Text style={style.textError}>{error}</Text>}
        
        </View>
        ); 
};
const style =StyleSheet.create({
    container:{
        marginBottom:20,
    },
    input:{
        borderWidth:1,
        backgroundColor:"#e8e8e8",
        height:60,
        flexDirection:"row",
        marginHorizontal:20,
        paddingHorizontal:15,
        borderWidth:0.75,
        alignItems:"center",
        borderRadius:200,
    },
    icon:{
        fontSize:25,
        color:"darkblue"
    },
    iconEye:{
        fontSize:20,
        color:"darkblue"
    },
    textInput:{
        color:"darkblue",
        flex:1,
        marginLeft:10,
        paddingHorizontal:10,
        paddingVertical:16,
        fontSize:16,

    },
    textError:{
        marginTop:7,
        color:"red",
        fontSize:14, 
    }
})
export default Input;