import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import CheckBox from '@react-native-community/checkbox';



const Educationinformation = () => {
    const [isSelected, setSelection] = useState(false);
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={styles.container1}>
            </View>


            <View style={styles.container2}>
                <View style={{ width: "95%", height: "63%", backgroundColor: 'white', marginBottom: '45%' ,}}>
                    <View style={{ backgroundColor: 'black', flex: 1, width: '100%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                            <Text>School</Text>
                            <TouchableOpacity>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', flex: 8, width: '100%', alignItems: "center", marginTop: 10 }}>

                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Course/Degree"
                                selectionColor={"black"}
                                placeholderTextColor="#716F6E"
                                onChangeText={(email) => { }} />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="School Name"
                                selectionColor={"black"}
                                placeholderTextColor="#716F6E"
                                onChangeText={(email) => { }} />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Grade/Score"
                                selectionColor={"black"}
                                placeholderTextColor="#716F6E"
                                onChangeText={(email) => { }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <View style={styles.inputView3}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="country"
                                    selectionColor={"black"}
                                    placeholderTextColor="#716F6E"
                                    onChangeText={(email) => { }}
                                />
                            </View>
                            <View style={styles.inputView3}>
                                <TextInput
                                    style={styles.TextInput}
                                    placeholder="pincode"
                                    selectionColor={"black"}
                                    placeholderTextColor="#716F6E"
                                    onChangeText={(email) => { }}
                                />
                            </View>
                        </View>
                        <View style={styles.inputView2}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Presonal info"
                                selectionColor={"black"}
                                placeholderTextColor="#716F6E"
                                onChangeText={(email) => { }} />
                        </View>
                        <View style={{
                            flexDirection: "row", width: '94%', marginBottom: 10
                        }} >
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                // style={styles.checkbox}
                                tintColors={{ true: 'red', false: '#D3D3D3' }}
                            />
                            <Text style={{ color: 'black', marginTop: 7 }}> I currently attend here </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text style={styles.buttonTextStyle}>
                      +  Add Another School
                    </Text>
                </TouchableOpacity>
                <View style = {{flexDirection:'row',justifyContent:'space-between',}}>
                <TouchableOpacity>
                        <Text style={styles.button}>Save & Next </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.button}>Back</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </ScrollView>
    )
}

export default Educationinformation;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#1F3040',
        flex: 1
    },
    container2: {
        //backgroundColor:'red',
        alignItems: "center",
        justifyContent: "center",
        flex: 4,
        backgroundColor: "#D3D3D3",
    },
    TextInput: {
        marginLeft: 10,
    },
    inputView: {
        backgroundColor: "#D3D3D3",
        width: "93%",
        height: 40,
        marginBottom: 10,
        // color: 'gray',
        borderRadius: 4,
        flexDirection: 'row',
        borderBottomWidth: 2.0,

    },
    inputView3: {
        backgroundColor: "#D3D3D3",
        width: "41.5%",
        height: 40,
        marginBottom: 10,
        marginLeft: '5%',
        marginRight: '5%',
        // color: 'gray',
        borderRadius: 4,
        borderBottomWidth: 2.0,
    },
    inputView2: {
        backgroundColor: "#D3D3D3",
        width: "93%",
        height: '25%',
        marginBottom: 10,
        // color: 'gray',
        borderRadius: 4,
        borderBottomWidth: 2.0,
    },
    buttonTextStyle: {
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
       // marginBottom:

    },
    button: {
       
       // marginLeft: '62%',
        color: 'white',
        padding: 10,
        //marginBottom: 15,
        backgroundColor:'red'

    }

})