import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Button, KeyboardAvoidingView, Alert } from 'react-native';

import { CountDown } from 'react-native-countdown-component';

const LoginWithOtpScreen = (props) => {

    const [otpfeild1, setOtpfeild1] = useState(null);
    const [otpfeild2, setOtpfeild2] = useState(null);
    const [otpfeild3, setOtpfeild3] = useState(null);
    const [otpfeild4, setOtpfeild4] = useState(null);
    const [otpfeild5, setOtpfeild5] = useState(null);
    const [otpfeild6, setOtpfeild6] = useState(null);

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    const inputRef5 = useRef(null)
    const inputRef6 = useRef(null)

    const verifyOtp = async () => {
        if (otpfeild1 == null || otpfeild2 == null || otpfeild3 == null || otpfeild4 == null || otpfeild5 == null || otpfeild6 == null) {
            Alert.alert("Invalid Input!", "Enter Valid OTP", [{ text: 'okay' }])
            return;
        }
        let otp = otpfeild1.value + otpfeild2.value + otpfeild3.value + otpfeild4.value + otpfeild5.value + otpfeild6.value
        let apiResults = await axios.post(`http://api.mocitius.com/users/verifyotp`, {otp:otp, mobile_number: props.route.params.mobileNumber})
        // .then(function (response) {
        //     props.navigation.navigate('Home')
        //     // console.log(response)
        // })
            .catch(function (error) {
                console.log(error)
                Alert.alert("Invalid Input!", "Invalid OTP", [{ text: 'okay' }])
                return;
            });
    }

    useEffect(() => {
        inputRef1.current.focus();
    }, [])

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#32363F' }} behavior={Platform.OS === 'ios' ? "padding" : "height"} keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <View style={styles.imageConatiner}>
                        <Image style={styles.image} source={require('../../assets/loginwithotp.jpg')} resizeMode='cover' />
                    </View>
                    <Text style={styles.heading}>Login With OTP</Text>
                    <View style={styles.OTPLabel}>
                        <Text style={{ fontSize: 18, color: 'white' }}>ENTER OTP</Text>
                    </View>
                    <View style={styles.OTPFieldContainer}>
                        <View style={styles.OTPField}>
                            <TouchableOpacity>
                                <TextInput style={styles.OTP} color='white' keyboardType="numeric" ref={inputRef1} maxLength={1} onChangeText={value => {
                                    setOtpfeild1({ value })
                                    if (value) inputRef2.current.focus();
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.OTPField}>
                            <TouchableOpacity>
                                <TextInput style={styles.OTP} color='white' keyboardType="numeric" ref={inputRef2} maxLength={1} onChangeText={value => {
                                    setOtpfeild2({ value })
                                    if (value) inputRef3.current.focus();
                                    if (value === '') inputRef1.current.focus();
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.OTPField}>
                            <TouchableOpacity>
                                <TextInput style={styles.OTP} color='white' keyboardType="numeric" ref={inputRef3} maxLength={1} onChangeText={value => {
                                    setOtpfeild3({ value })
                                    if (value) inputRef4.current.focus();
                                    if (value === '') inputRef2.current.focus();
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.OTPField}>
                            <TouchableOpacity>
                                <TextInput style={styles.OTP} color='white' keyboardType="numeric" ref={inputRef4} maxLength={1} onChangeText={value => {
                                    setOtpfeild4({ value })
                                    if (value) inputRef5.current.focus();
                                    if (value === '') inputRef3.current.focus();
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.OTPField}>
                            <TouchableOpacity>
                                <TextInput style={styles.OTP} color='white' keyboardType="numeric" ref={inputRef5} maxLength={1} onChangeText={value => {
                                    setOtpfeild5({ value })
                                    if (value) inputRef6.current.focus();
                                    if (value === '') inputRef4.current.focus();
                                }} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.OTPField}>
                            <TouchableOpacity>
                                <TextInput style={styles.OTP} color='white' keyboardType="numeric" ref={inputRef6} maxLength={1} onChangeText={value => {
                                    setOtpfeild6({ value })
                                    if (value === '') inputRef5.current.focus();
                                }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <View style={styles.OTPTimer}>
                            <CountDown
                                size={18}
                                until={30}
                                digitStyle={{ backgroundColor: '#32363F' }}
                                digitTxtStyle={{ color: 'white' }}
                                separatorStyle={{ color: 'white' }}
                                timeToShow={['M', 'S']}
                                timeLabels={{ m: null, s: null }}
                                showSeparator
                            />
                        </View>
                    </View>
                    <View >
                        <TouchableOpacity onPress={verifyOtp} style={styles.ButtonContainer}>
                            <Text style={styles.allowAccessButton}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.resendBtnConatiner}>
                        <Text style={{ color: '#AEAEAE', fontSize: 18 }} >Don't Recieve SMS?</Text>
                        <Button title="Resend Code" color="white" />
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
    imageConatiner: {
        height: 300,
        width: 300,
        marginTop: 80
    },
    image: {
        height: '100%',
        width: '100%'
    },
    heading: {
        fontFamily: 'poppins',
        color: 'white',
        marginTop: 10,
        fontSize: 30
    },
    OTPLabel: {
        marginTop: 25,
        alignItems: 'flex-start',
        marginLeft: -105
    },
    OTPFieldContainer: {
        flexDirection: 'row',
        marginTop: 10
    },
    OTPField: {
        height: 50,
        width: 50,
        margin: 4,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#32363F',
        borderColor: '#AEAEAE',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    OTP: {
        fontSize: 30,
    },
    OTPTimer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
    ButtonContainer: {
        marginTop: 30,
        elevation: 8,
        backgroundColor: "#13BD96",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 70,
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
    resendBtnConatiner: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center'
    }
});

export default LoginWithOtpScreen