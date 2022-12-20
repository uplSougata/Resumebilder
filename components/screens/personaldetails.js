import { View, StyleSheet, TouchableOpacity,Text,Image, TextInput, Button } from "react-native"
import React from "react";

const Presonaldetails = () => {
    return (
        
        <View style = {{flex:1}} >
            <View style = {styles.container1}>

            </View>
            <View style = {styles.container2}>
                <View style = {styles.photouplodecontainer}>
                <Image  source={require('../../assets/persionimage.png')}
                style={styles.imagestyle}
/>
                <TouchableOpacity>
                    <Text style={styles.buttonTextStyle}>Uploading Image </Text>
                </TouchableOpacity>
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Full Name"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Profession"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="city"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                <View style = {{flexDirection:'row',width:'50%'}}>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="country"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="pincode"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                />
                </View>
                <View style={styles.inputView2}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Presonal info"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }} />
                </View>
                <View style={styles.button}>
                <Button title="Save & next" onPress={() => { }} color='red'/>
            </View>
            </View>
        </View>
    )
}

export default Presonaldetails;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: 'blue',
       flex:1
    },
    container2: {
        //backgroundColor:'red',
        flex:9,
       alignItems: "center",
       //justifyContent: "center",


    },
    photouplodecontainer:{
       // justifyContent: "center",
       // textAlign:'center',
    },
    imagestyle:{
        width: 134,
         height: 120,
         marginTop: 8, 
         marginBottom: 4
    },
    buttonTextStyle: {
        color: 'black',
        marginTop:8,
        borderColor:'black',
        borderWidth:1,
        padding:10,
        marginBottom:20
    },
    TextInput: {
        marginLeft: 10,
    },
    inputView: {
        backgroundColor: "#D3D3D3",
        width: "90%",
        height: 45,
        marginBottom: 10,
        // color: 'gray',
        borderRadius: 4,
        flexDirection: 'row',
        borderBottomWidth: 2.0,

    },
    inputView2:{
        backgroundColor: "#D3D3D3",
        width: "90%",
        height: '15%',
        marginBottom: 10,
        // color: 'gray',
        borderRadius: 4,
      
        borderBottomWidth: 2.0,

    },
    button:{
        justifyContent: "center",
        
        textAlign: 'center',
        borderRadius: 5,
    }

})