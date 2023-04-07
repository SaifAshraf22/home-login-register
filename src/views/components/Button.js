import { Text,TouchableOpacity,StyleSheet } from "react-native";

const Button=({title,onPress=()=>{}})=>{
    return(
        <TouchableOpacity onPress={onPress} style={style.button} activeOpacity={0.7}>
        <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    );
};
const style=StyleSheet.create({
    button:{
        height:55,
        width:"100",
        marginHorizontal:50,
        backgroundColor:"#119390",
        marginVertical:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,
    },
    title:{
        color:"white",
        fontWeight:"bold",
        fontSize:18,
    }
})
export default Button;