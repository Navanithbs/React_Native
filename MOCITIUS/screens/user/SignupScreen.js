import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Button, Keyboard, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import axios from 'axios';

import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';


const SignUpScreen = (props) => {

    const [gender, setGender] = React.useState('male');
    const [mobileNumber, setMobileNumber] = useState('');
    const [name,setName] = useState('');
    const [emailId,setEmailId] = useState('');
    const [mpin,setMpin] = useState('')

    const getOtp = async () => {
        console.log("1")
        if(mobileNumber=='' || name=='' || emailId == '' || mpin == ''){
            Alert.alert("Wrong Input!","Enter All The Credentials",[{text:'okay'}])
            return;
        }
        let apiResults;
        try{
            apiResults = await axios.get(`http://route.mocitius.com/cache/api/user/signupotp?mobilenumber=${mobileNumber.text}`)
            console.log(apiResults.data);
            if (apiResults.data === true) {
                props.navigation.navigate('EnterOtp',{
                    gender,
                    mobileNumber,
                    name,
                    emailId,
                    mpin
                })
            }
        }
        catch(e){
            console.log(e)
            Alert.alert("Inavlid Input!","Mobile Number Already Exists",[{text:'okay'}])
            return;
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#32363F' }} behavior={Platform.OS === 'ios' ? "padding" : "height"} keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
                <View style={styles.container}>
                    <View style={styles.imageConatiner}>
                        <Image style={styles.image} source={require('../../assets/signup.jpg')} resizeMode='cover' />
                    </View>
                    <Text style={styles.heading}>SIGN UP</Text>
                    <View>
                        <Text style={{ color: '#AEAEAE', marginTop: 20, marginBottom: -25 }}>Please create your profile</Text>
                    </View>
                    <View style={styles.fieldsConatiner}>
                        <View style={styles.field}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="phone-portrait-outline" size={30} color="white" />
                            <TextInput style={{ fontSize: 20 }} placeholder="Mobile Number" placeholderTextColor="white" color='white' keyboardType="numeric" maxLength={10} onChangeText={(text) => setMobileNumber({ text })} />
                        </View>
                        <View style={styles.field}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="person-circle-sharp" size={30} color="white" />
                            <TextInput style={{ fontSize: 20 }} placeholder="Name" placeholderTextColor="white" color='white' keyboardType="default" onChangeText={(text) => setName({ text })} />
                        </View>
                        <View style={styles.field}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="mail-outline" size={30} color="white" />
                            <TextInput style={{ fontSize: 20 }} placeholder="Email Id" placeholderTextColor="white" color='white' keyboardType="default" onChangeText={(text) => setEmailId({ text })} />
                        </View>
                        <View style={styles.field}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="lock-closed-outline" size={30} color="white" />
                            <TextInput style={{ fontSize: 20 }} secureTextEntry={true} placeholder="Create MPIN" placeholderTextColor="white" color='white' keyboardType="numeric" maxLength={4} onChangeText={(text) => setMpin({ text })}/>
                        </View>
                    </View>
                    <View style={styles.genderConatiner}>
                        <Text style={{ fontSize: 20, color: 'white' }}>Gender : </Text>
                        <Text style={{ fontSize: 20, color: 'white' }} onPress={() => setGender('male')}>Male</Text>
                        <RadioButton
                            value="male"
                            status={gender === 'male' ? 'checked' : 'unchecked'}
                            color="white"
                            uncheckedColor="white"
                            onPress={() => setGender('male')}
                        />
                        <Text style={{ fontSize: 20, color: 'white' }} onPress={() => setGender('female')}>Female</Text>
                        <RadioButton
                            value="female"
                            color="white"
                            status={gender === 'female' ? 'checked' : 'unchecked'}
                            onPress={() => setGender('female')}
                        />
                    </View>
                    <TouchableOpacity style={styles.signupBtnContainer} onPress={getOtp} >
                        <Text style={styles.signupBtn} >Sign Up</Text>
                    </TouchableOpacity>
                    <View style={styles.loginConatiner}>
                        <Text style={{ color: '#AEAEAE', fontSize: 18 }} >Already a member?</Text>
                        <Button title="Sign In" color="white" onPress={() => { props.navigation.navigate('Login') }} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32363F',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    imageConatiner: {
        height: 250,
        width: 270
    },
    image: {
        height: '100%',
        width: '100%'
    },
    heading: {
        fontFamily: 'poppins',
        color: 'white',
        marginTop: 10,
        fontSize: 30,
        marginBottom: -15
    },
    fieldsConatiner: {
        marginTop: 40,
    },
    field: {
        flexDirection: 'row',
        height: 50,
        width: 300,
        margin: 4,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#32363F',
        borderColor: '#AEAEAE',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    signupBtnContainer: {
        marginTop: 20,
        paddingHorizontal: 90,
        paddingVertical: 15,
        backgroundColor: '#13BD96',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    signupBtn: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center'
    },
    loginConatiner: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    genderConatiner: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SignUpScreen