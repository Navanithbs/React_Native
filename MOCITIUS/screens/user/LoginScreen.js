import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity, KeyboardAvoidingView,Alert } from 'react-native';
import axios from 'axios';

import { Ionicons } from '@expo/vector-icons';

const LoginScreen = (props) => {

    const [mobileNumber,setMobileNumber] = useState(null);

    const setLogin = async() => {
        if(mobileNumber == null){
            Alert.alert("Invalid Input!","Enter Mobile Number",[{text:'okay'}])
            return;
        }
        let apiResults;
        apiResults = await axios.get(`https://route.mocitius.com/cache/api/user/otp?phone=${mobileNumber.text}`)
        .then(function (response) 
          {
            // console.log(response)
            if(response.data != null || undefined || false) 
            {
                props.navigation.navigate('LoginWithOtp',{
                    mobileNumber
                })
            }
          })
          .catch(function (error) 
          {
            console.log(error)
            Alert.alert("Invalid Input!","Invalid Mobile Number",[{text:'okay'}])
            return;
          });
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#32363F' }} behavior={Platform.OS === 'ios' ? "padding" : "height"} keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/mapborder.jpg')} style={styles.image} resizeMode='cover' fadeDuration={1000} />
                    </View>
                    <View>
                        <Text style={styles.heading}>Welcome Back!</Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={{ color: '#AEAEAE' }}>Enter your phone number to proceed : </Text>
                    </View>
                    <View style={{ alignSelf: 'flex-start' }} >
                        <Text style={{ color: '#AEAEAE', marginTop: 30, marginBottom: -25 }}>10 Digit Mobile Number</Text>
                    </View>
                    <View style={styles.numberContainer}>
                        <TextInput
                            style={styles.CountryCode}
                            color='white'
                            keyboardType="default"
                            value={'+91'}
                        />
                        <View style={styles.number} >
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="phone-portrait-outline" size={30} color="white" />
                            <TextInput
                                style={{ fontSize: 20,color:'white' }}
                                placeholder="Enter Mobile Number"
                                color="white"
                                placeholderTextColor="white"
                                keyboardType="numeric"
                                maxLength={10}
                                onChangeText={(text) => setMobileNumber({ text })}
                            />
                        </View>
                    </View>
                    {/* alignSelf: 'flex-end' */}
                    <View style={{margin:8}} >
                        <Button color='#13BD96' title="Login with MPIN" onPress={() => { props.navigation.navigate('LoginWithMpin') }} />
                    </View>
                    <View>
                    {/* onPress={() => { props.navigation.navigate('Home') }  */}
                        <TouchableOpacity onPress={setLogin} style={styles.ButtonContainer}>
                            <Text style={styles.allowAccessButton}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signupBtnConatiner}>
                        <Text style={{ color: 'white', fontSize: 18 }} >Not a member yet?</Text>
                        <Button title="Sign Up" color='#13BD96'  onPress={() => { props.navigation.navigate('Signup') }} />
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
    CountryCode: {
        fontSize: 20,
        height: 50,
        width: 50,
        margin: 12,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#68727C',
        borderRadius: 10
    },
    number: {
        flexDirection: 'row',
        height: 50,
        width: 250,
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
        marginBottom: 5,
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
    signupBtnConatiner: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default LoginScreen;