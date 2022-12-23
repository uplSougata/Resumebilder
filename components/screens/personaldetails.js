import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput, Button, ScrollView, ProgressBarAndroid } from "react-native"
import React, { useState } from "react";
import Stepper from "react-native-stepper-ui";
import { ProgressBar, Colors } from "react-native-paper";

const Presonaldetails = () => {
    const [status, setStatus] = useState(1 / 6);
    const [progressColor, setProgessColor] = useState('yellow')

    // const [active, setActive] = useState(0);
    return (
        <ScrollView   contentContainerStyle={{
            flex: 1,
            //justifyContent: 'space-between'
        }}>
            <ScrollView >
            <View style = {styles.container1}>

            <Text style={{
                    margin: 10, fontSize: 18,
                    fontWeight: "bold"
                }}>Please  fill  all  the steps to  complete your resume</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <Text>personal information</Text>
                    <Text>step 1/6</Text>
                </View>
                <View style = {{marginBottom:20}}>
                <ProgressBar progress={status} color={progressColor} />
                </View>
            </View>
            </ScrollView>
            <ScrollView>
            <View style = {styles.container2}>
                
            <View style={{ backgroundColor: '#E9EFF5', width: 130, height: 150, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../assets/persionimage.png')}
                            style={styles.imagestyle} />

                    </View>

               <TouchableOpacity>
                        <Text style={styles.buttonTextStyle}>Uploading Image </Text>
                    </TouchableOpacity>

                    <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Full Name"
                        selectionColor={"black"}
                        placeholderTextColor="#716F6E"
                        onChangeText={(email) => { }}/>
                     </View>
                     <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Profession"
                        selectionColor={"black"}
                        placeholderTextColor="#716F6E"
                        onChangeText={(email)=> { }}/>
                     </View>
                     <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="city"
                        selectionColor={"black"}
                        placeholderTextColor="#716F6E"
                        onChangeText={(email)=> { }}/>
                     </View>
                     <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                    <View style={styles.inputView3}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="country"
                            selectionColor={"black"}
                            placeholderTextColor="#716F6E"
                            onChangeText={(email)=> { }}
                        />
                    </View>
                    <View style={styles.inputView3}>
                        <TextInput
                            style={styles.TextInput}
                            placeholder="pincode"
                            selectionColor={"black"}
                            placeholderTextColor="#716F6E"
                            onChangeText={(email)=> { }}
                        />
                    </View>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Phone"
                        selectionColor={"black"}
                        placeholderTextColor="#716F6E"
                        onChangeText={(email)=> { }}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        selectionColor={"black"}
                        placeholderTextColor="#716F6E"
                        onChangeText={(email)=> { }}
                    />
                </View>
                <View style={styles.inputView2}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Presonal info"
                        selectionColor={"black"}
                        placeholderTextColor="#716F6E"
                        onChangeText={(email)=> { }} />
                </View>

                <TouchableOpacity>
                        <Text style={styles.button}>Save & Next </Text>
                    </TouchableOpacity>

            </View>
            </ScrollView>
        </ScrollView>

    )
}

export default Presonaldetails;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#1F3040',
        flex:2
    },
    container2: {
        //backgroundColor:'red',
        alignItems: "center",
        justifyContent: "center",
        flex: 4,
        marginBottom: 20,
    },
    imagestyle: {
        width: 115,
        height: 130,
        // marginBottom: 4,


    },
    buttonTextStyle: {
        color: 'black',
        marginTop: 8,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15
    },
    TextInput: {
        marginLeft: 10,
    },
    inputView: {
        backgroundColor: "#D3D3D3",
        width: "90%",
        height: 40,
        marginBottom: 10,
        // color: 'gray',
        borderRadius: 4,
        flexDirection: 'row',
        borderBottomWidth: 2.0,

    },
    inputView2: {
        backgroundColor: "#D3D3D3",
        width: "90%",
        height: '15%',
        marginBottom: 10,
        // color: 'gray',
        borderRadius: 4,
        borderBottomWidth: 2.0,
    },
    inputView3: {
        backgroundColor: "#D3D3D3",
        width: "40%",
        height: 40,
        marginBottom: 10,
        marginLeft: '5%',
        marginRight: '5%',
        // color: 'gray',
        borderRadius: 4,
        borderBottomWidth: 2.0,
    },
    button: {
       
        marginLeft: '62%',
        color: 'white',
        marginTop: 8,
        padding: 10,
        //marginBottom: 15,
        backgroundColor:'red'

    }

})