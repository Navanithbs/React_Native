import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard, Button, TouchableOpacity, KeyboardAvoidingView,Alert } from 'react-native';
import axios from 'axios';

import { Ionicons } from '@expo/vector-icons';

const VarifyEmailScreen = (props) => {

    // const [Email,setEmailId] =useState("xyz@gmail.com")

    const EmailId = props.route.params.EmailId;
    // setEmailId({EmailId})

    const verifyMail = () => {
        console.log('verified :)')
        // let apiResults;
        // apiResults = await axios.get(`https://route.mocitius.com/cache/api/user/otp?phone=${mobileNumber.text}`)
        // .then(function (response) 
        //   {
        //     console.log(response.data);
        //     if(response.data === true) 
        //     {
        //         props.navigation.navigate('LoginWithOtp',{mobileNumber})
        //     }
        //   })
        //   .catch(function (error) 
        //   {
        //     console.log(error)
        //     Alert.alert("Something went wrong!!","Please try again..",[{text:'okay'}])
        //     return;
        //   });
    }

    return (
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/mapborder.jpg')} style={styles.image} resizeMode='cover' fadeDuration={1000} />
                    </View>
                    <View>
                        <Text style={styles.heading}>Check Your Email</Text>
                    </View>
                    <View style={styles.detailContainer}>
                        <Text style={{ color: '#AEAEAE' }}>We sent an email to <Text style={{color:'#13BD96'}}>{EmailId}</Text> with instruction to reset your password </Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={verifyMail} style={styles.ButtonContainer}>
                            <Text style={styles.allowAccessButton}>Verify</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
        fontSize: 38,
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

export default VarifyEmailScreen;