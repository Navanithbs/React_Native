import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, Button, Keyboard, TextInput, KeyboardAvoidingView,Alert } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

const LoginWithMpinScreen = (props) => {

    const [mobileNumber,setMobileNumber] = useState(null);
    const [mpin,setMpin] = useState(null);

    const loginMpin = async () => {
        if(mobileNumber==null || mpin==null) {
            Alert.alert("Invalid Input!","Enter Mobile Number & Mpin",[{text:'okay'}])
            return;
        } 
        let apiResults;
        apiResults = await axios.post(`http://api.mocitius.com/users/easypool/v2/passenger/login`,{
            mobile_number:mobileNumber.text,
            mpin:mpin.text
        }).then(function (response) {
            props.navigation.navigate('Home')
          })
          .catch(function (error) {
            Alert.alert("Inavlid Input!","You may have entered incorrect Mobile Number or Mpin",[{text:'okay'}])
            return;
          });
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#32363F' }} behavior={Platform.OS === 'ios' ? "padding" : "height"} keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }} >
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/mapborder.jpg')} style={styles.image} resizeMode='cover' fadeDuration={1000} />
                    </View>
                    <Text style={styles.heading}>Login With MPIN</Text>
                    <View>
                        <Text style={{ color: '#AEAEAE', marginTop: 20, marginBottom: -25 }}>Enter Your number & MPIN </Text>
                    </View>
                    <View style={styles.inputConatiner}>
                        <View style={styles.input}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="phone-portrait-outline" size={30} color="white" />
                            <TextInput style={{ fontSize: 20,color:'white' }} placeholderTextColor="white" placeholder="Enter Mobile Number" keyboardType="numeric" maxLength={10} onChangeText={(text) => setMobileNumber({ text })} />
                        </View>
                        <View style={styles.input}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="lock-closed-outline" size={30} color="white" />
                            <TextInput style={{ fontSize: 20,color:'white' }} secureTextEntry={true} placeholderTextColor="white" placeholder="Enter MPIN" keyboardType="numeric" maxLength={4} onChangeText={(text) => setMpin({ text })}/>
                        </View>
                    </View>
                    <View style={styles.forgotPassBtnContainer}>
                        <Button color="#13BD96" title="Forgot Password?" />
                    </View>
                    <TouchableOpacity style={styles.loginBtnContainer} onPress={loginMpin} >
                        <Text style={styles.loginBtn} >Login</Text>
                    </TouchableOpacity>
                    <View style={styles.signupConatiner}>
                        <Text style={{ color: '#AEAEAE', fontSize: 18 }} >Not a member yet?</Text>
                        <Button color="#13BD96" title="Sign up" onPress={() => { props.navigation.navigate('Signup') }} />
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
        padding: 30
    },
    imageContainer: {
        height: 300,
        width: 300
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
    inputConatiner: {
        marginTop: 40
    },
    input: {
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
    forgotPassBtnContainer: {
        alignSelf: 'flex-end'
    },
    loginBtnContainer: {
        marginTop: 10,
        paddingHorizontal: 90,
        paddingVertical: 15,
        backgroundColor: '#13BD96',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
    },
    loginBtn: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center'
    },
    signupConatiner: {
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default LoginWithMpinScreen