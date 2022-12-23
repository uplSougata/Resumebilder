import { ScrollView,StyleSheet ,View,Text,} from "react-native";
import React from "react";

const Educationinformation = () => {
    return(
        <ScrollView contentContainerStyle = {{flex:1}}>
           
            <View style = {styles.container1}>

            </View>
           
           
            <View style = {styles.container2}>
            <View style = {{width:150,hight:150,backgroundColor:'black',justifyContent: 'center', alignItems: 'center'}}>

            </View>

            </View>
           
           
        </ScrollView>
    )
}

export default Educationinformation;

const styles= StyleSheet.create({
 container1: {
        backgroundColor: '#1F3040',
        flex:1
    },
    container2: {
        //backgroundColor:'red',
        alignItems: "center",
        justifyContent: "center",
       flex: 4,
        backgroundColor:'red',
    },

})