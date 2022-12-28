import { ScrollView, StyleSheet, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { ProgressBar, Colors } from "react-native-paper";

const Firstjobdetails = ({navigation}) => {

    const [isSelected, setSelection] = useState(false);
    const [status, setStatus] = useState(4 / 6);
    const [progressColor, setProgessColor] = useState('red')
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
            <View style={styles.container1}>
                <Text style={{margin: 10, fontSize: 18,fontWeight: "bold"}}>Please  fill  all  the steps to  complete your resume</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                    <Text>personal information</Text>
                    <Text>step 4/6</Text>
                </View>
                <View style={{ margin:10,marginBottom:30}}>
                    <ProgressBar progress={status} color={progressColor} style = {{height: 10,borderRadius:10}} />
                </View>
            </View>
            </ScrollView>
            <ScrollView >
                <View style={styles.container2}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'position' : null}
                        keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 70}
                        >
                        <View style={{ width: 358, height: 363, backgroundColor: 'white', marginTop: 15 }}>
                            <View style={{ backgroundColor: 'black', flex: 1, width: '100%' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 12, }}>
                                    <Text>School</Text>
                                    <TouchableOpacity>
                                        <Text>Delete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ backgroundColor: 'white', flex: 8, alignItems: "center", marginTop: 10 }}>

                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Company Name"
                                        selectionColor={"black"}
                                        placeholderTextColor="#716F6E"
                                        onChangeText={(email) => { }} />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Position"
                                        selectionColor={"black"}
                                        placeholderTextColor="#716F6E"
                                        onChangeText={(email) => { }} />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Start Date"
                                        selectionColor={"black"}
                                        placeholderTextColor="#716F6E"
                                        onChangeText={(email) => { }} />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="End Date"
                                        selectionColor={"black"}
                                        placeholderTextColor="#716F6E"
                                        onChangeText={(email) => { }} />
                                </View>
                               
                                <View style={styles.inputView2}>
                                    <TextInput
                                        style={styles.TextInput}
                                        placeholder="Discription"
                                        selectionColor={"black"}
                                        placeholderTextColor="#716F6E"
                                        onChangeText={(email) => { }} />
                                </View>
                            </View>
                            
                        </View>
                        
                    </KeyboardAvoidingView>

                    <TouchableOpacity style={{ marginTop: 25 }}>
                        <Text style={styles.buttonTextStyle}>
                            +  Add Another School
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:'34%',margin:'8%',marginLeft:'55%',}}>
                        <TouchableOpacity onPress={() =>
        navigation.navigate('Skillinformation')}>
                        <Text style={styles.button1}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>
        navigation.navigate('') }>
                        <Text style={styles.button2}>Save & Next </Text>
                        </TouchableOpacity>     
                    </View>
                </View>
            </ScrollView>
        </View>

    )

}
export default Firstjobdetails;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: '#1F3040',
        flex: 1,
    },
    container2: {
        alignItems: "center",
        flex: 3,
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
        borderRadius: 4,
        borderBottomWidth: 2.0,
    },
    inputView2: {
        backgroundColor: "#D3D3D3",
        width: "93%",
        height: '28%',
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
    button1: {
        //marginRight: '40%',
        //marginLeft: '20%',
        color: 'white',
        padding: 10,
        //marginBottom: 15,
        backgroundColor: 'black',
      
    },
    button2: {
        marginLeft: '12%',
        color: 'white',
        padding: 10,
        //marginBottom: 15,
        backgroundColor: 'red',
    }

})