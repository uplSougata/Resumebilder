import { View,StyleSheet,Text } from "react-native";
import React from "react";
 const CustomprogressBar = () => {

    return(
        <View style={styles.container}>
            <Text></Text>
        <View style={styles.progressBar}></View>
      </View>
    )
 }

 export default CustomprogressBar;

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", //column direction
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
      },
      progressBar: {
        height: 20,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
      }
 })