import { TextInput, View, StyleSheet, Image, Text, Button, TouchableOpacity, ScrollView, } from "react-native";
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
//import { CheckBox } from 'react-native';
const Homescreen = () => {

    const [isSelected, setSelection] = useState(false);


    return (
        <ScrollView  >
        <View style={styles.container}>
            <Image
                source={require('../../assets/Group.png')}
                style={{ width: 124, height: 40,marginTop: 80, marginBottom: 40 }}

            />
            <View style={{ marginBottom: 30 }} >
                <Text style={{ color: 'black', fontSize: 22, textAlign: 'center', }}> Create Account</Text>
                <Text style={{ color: '#716F6E', fontSize: 17 }} >Create your CV builder account</Text>
            </View>


            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    selectionColor={"black"}
                    placeholder="Name"
                    placeholderTextColor="#716F6E"
                    onChangeText={(email) => { }}
                //underlineColorAndroid={'black'}

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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    secureTextEntry={true}
                    onChangeText={(password) => { }}
                />
                <Text style={{ padding: 13, color: '#716F6E', }}>Hide</Text>
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Confirm password"
                    selectionColor={"black"}
                    placeholderTextColor="#716F6E"
                    secureTextEntry={true}
                    onChangeText={(email) => { }}
                />
                <Text style={{ padding: 13, color: '#716F6E',}}>Hide</Text>
            </View>

            <View style={{
                flexDirection: "row", width: '90%',marginBottom:10
            }} >
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    // style={styles.checkbox}
                    tintColors={{ true: 'red', false: '#D3D3D3' }}
                />
                <Text style={{ color: 'black', marginTop: 7 }}> I agree to all </Text>
                <Text style={{ color: 'red', marginTop: 7 }}>
                    Trems, Privacy Policy
                </Text>
            </View>

            <View style={styles.inputView3}>
                <Button title="Sign Up" onPress={() => { }} color='black'/>
            </View>

            <View style={styles.inputView2}>

                <TouchableOpacity
                    style={styles.buttonGPlusStyle}
                    //activeOpacity={0.5}
                    >
                    <Image
                        source={require('../../assets/googleIcon.png')}
                        style={styles.buttonImageIconStyle}
                    />
                    <Text style={styles.buttonTextStyle}>
                        Sign in with Google
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 60 }}>
                <Text style={{ color: 'black' }}> Don't have an account? </Text>
                <Text style={{ color: 'red' }}>Sign up</Text>
            </View>

        </View>
        </ScrollView>
    );
}
export default Homescreen;

const styles = StyleSheet.create({
    buttonImageIconStyle: {
     
        margin: 2,
        height: 26,
        width: 24,
        justifyContent: "center",
    },

    buttonTextStyle: {
        color: 'black',
        marginBottom: 4,
        marginLeft: 10,
    },
    buttonGPlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#dc4e41',
        //borderWidth: 0.5,
        //  borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
    },
    container: {
        flex:1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",

    },
    inputView2: {
        color: 'black',
        backgroundColor: "white",
        width: "90%",
        marginBottom: 25,
        color: 'gray',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3D3D3',
        borderWidth: 2,
    },
    inputView3: {
        backgroundColor: "black",
        width: "90%",
        height: 50,
        color: 'gray',
        justifyContent: "center",
        margin: 20,
        textAlign: 'center',
        borderRadius: 5,
    },

    inputView: {
        backgroundColor: "#D3D3D3",
        width: "90%",
        height: 45,
        marginBottom: 22,
        // color: 'gray',
        borderRadius: 4,
        flexDirection: 'row',
        borderBottomWidth: 2.0

    },
    authinput: {
        height: 45,
        flex: 1,
        // padding: 4,
        marginLeft: 10,
        justifyContent: 'center',
        textAlign: 'center',
        color: 'black',
    },

    TextInput: {
        flex: 1,
        //  padding: 4,
        marginLeft: 10,
       // borderBottomWidth: 2.0
    },
    checkbox: {
        borderColor: 'black',
        borderWidth: 3,
        // justifyContent: "flex-end",
        alignSelf: "flex-start",

    }
})