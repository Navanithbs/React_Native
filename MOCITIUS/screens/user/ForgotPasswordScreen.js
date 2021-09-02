import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity, KeyboardAvoidingView,Alert } from 'react-native';
import axios from 'axios';

import { Ionicons } from '@expo/vector-icons';

const ForgotPasswordScreen = (props) => {

    const [EmailId,setEmailId] = useState(null);

    const sendMail = () => {
        if(EmailId == null){
            Alert.alert("Invalid Input!","Enter Mail ID",[{text:'okay'}])
            return;
        }
        props.navigation.navigate('VarifyEmail',{EmailId:EmailId.text})
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#32363F' }} behavior={Platform.OS === 'ios' ? "padding" : "height"} keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/mapborder.jpg')} style={styles.image} resizeMode='cover' fadeDuration={1000} />
                    </View>
                    <View>
                        <Text style={styles.heading}>Forgot Password</Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={{ color: '#AEAEAE' }}>Enter your email and we will send you a link to reset your password!! </Text>
                    </View>
                    
                    <View style={styles.numberContainer}>
                        <View style={styles.number} >
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="mail-outline" size={30} color="white" />
                            <TextInput style={{ fontSize: 20 }} placeholder="Email Id" placeholderTextColor="white" color='white' keyboardType="default" onChangeText={(text) => setEmailId({ text })} />
                        </View>
                    </View>
                    <View>
                    {/* onPress={() => { props.navigation.navigate('Home') }  */}
                        <TouchableOpacity onPress={sendMail} style={styles.ButtonContainer}>
                            <Text style={styles.allowAccessButton}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32363F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    heading: {
        fontFamily: 'poppins',
        fontSize: 40,
        color: 'white'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: '100%',
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 30,
        marginTop: 30
    },
    detailContainer: {
        fontFamily: 'roboto',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberContainer: {
        padding: 10,
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: -25,
    },
    number: {
        flexDirection: 'row',
        height: 50,
        width: 350,
        margin: 4,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#68727C',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ButtonContainer: {
        elevation: 8,
        backgroundColor: "#13BD96",
        marginTop: 30,
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 80,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,

    },
    allowAccessButton: {
        fontSize: 18,
        color: "white",
        alignSelf: "center",
    },
})

export default ForgotPasswordScreen;