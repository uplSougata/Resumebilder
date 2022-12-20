import { View,Text,StyleSheet } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native";


const Splashscreen = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <Text style = {styles.textstyle} >splashscreen</Text>
            <ActivityIndicator size="large" color="black"/>
        </View>
    )
}
export default Splashscreen;

const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:'center',
    alignContent:'center',
    backgroundColor:'pink',
    justifyContent:'center',
    padding:10
    
},
textstyle:{
    color:'black',
    fontWeight: 'bold',
    fontSize:30,
    padding:10,
}
})
