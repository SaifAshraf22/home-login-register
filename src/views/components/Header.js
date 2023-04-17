import React from 'react'
import { View, Text ,StyleSheet,Dimensions } from 'react-native'
import {Colors,parameters} from "../../global/styles"
import { Icon } from 'react-native-elements'
const Header = ({title,type,navigation}) => {
  return (
    <View style={styles.header}>
        <View>
            <Icon
                style={{marginLeft:10,}}
                type='material-community'
                name={type}
                color={Colors.headerText}
                size={30}
                onPress={()=>{navigation.goBack()}}
            />
        </View>
        <View>
           <Text style={styles.headerText}>{title}</Text> 
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:Colors.buttons,
        height:parameters.headerHeight,
        paddingBottom:20
    },
    headerText:{
        color:Colors.headerText,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:15
    }
})

export default Header