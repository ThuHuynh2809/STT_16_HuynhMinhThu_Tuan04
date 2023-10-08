import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
//import { Checkbox } from 'expo-checkbox';
import { Checkbox } from 'react-native-paper';
export default function twoC() {
    var [password, setPassword] = useState('')
    var [length, setLength] = useState()
    var [LowerCase, setLowerCase] = useState(false)
    var [Upcase, setUpcase] = useState(false)
    var [Number, setNumber] = useState(false)
    var [SpecialSymbol, setSpecialSymbol] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.viewPass}>
                <Text style={styles.textPass}>PASSWORD GENERATOR</Text>
                <TextInput style={styles.textInput} editable={false} value={password} />
                <View style={styles.viewFrontText}>
                    <Text style={styles.TextFront}> Password length </Text>
                    <TextInput
                        style={styles.InputPassLengt}
                        value={length}
                        onChangeText={(text) => setLength(text)}
                    ></TextInput>
                </View>
                <View style={styles.viewFrontText}>
                    <Text style={styles.TextFront}> Include lower case letters </Text>
                    <Checkbox
                        color={'white'}
                        uncheckedColor='white'
                        status={LowerCase ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setLowerCase(!LowerCase);
                        }}
                    />
                </View>
            </View>
        </View>
    )
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B3B98',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewPass: {
        flex: 1,
        width: '90%',
        marginVertical: '5%',
        backgroundColor: '#23235B',
        alignItems: 'center',
        borderRadius: 10,
    },
    textPass: {
        fontSize: 25,
        width: '270px',
        top: '20px',
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
        paddingBottom: 10,
        textAlign: 'center'
    },
    textInput: {
        backgroundColor: "#151537",
        width: '90%',
        height: '40px',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    viewFrontText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        marginBottom: 10,
    },
    TextFront: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold',
    },
    InputPassLengt: {
        color: "#000000",
        fontSize: 18,
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 5,
        width: 100,
    },
    checkbox: {
        height: '20px',
        width: '20px'
    }
})