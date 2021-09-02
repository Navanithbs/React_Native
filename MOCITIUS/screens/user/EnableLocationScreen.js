import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, Image, TouchableOpacity, ActivityIndicator,NetInfo} from 'react-native';

import * as Location from 'expo-location';

const EnableLocationScreen = (props) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        setIsLoading(true)
        let locationFromApi = await Location.getCurrentPositionAsync({});
        // console.log(locationFromApi)
        setLocation(locationFromApi);
        props.navigation.navigate('Carousel')
        setIsLoading(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/mapdesign.jpg')} style={styles.image} resizeMode='cover' fadeDuration={1000} />
            </View>
            <View>
                <Text style={styles.heading}>Enable Location</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={{ color: '#AEAEAE' }}>For a better experience,allow us to turn on device</Text>
                <Text style={{ color: '#AEAEAE' }}> location,which uses Google location service</Text>
            </View>
            <View >
                <TouchableOpacity onPress={getLocation} style={styles.ButtonContainer}>
                    {isLoading ? <ActivityIndicator size="small" color="#32363F"/> : <Text style={styles.allowAccessButton}>Allow Access</Text>}
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => { props.navigation.navigate('Carousel') }} style={styles.nextButtonContainer} >
                    <Text style={styles.nextButton}>No Thanks</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#32363F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginVertical: 30,
        marginTop: 50
    },
    heading: {
        fontFamily: 'poppins',
        fontSize: 40,
        color: 'white'
    },
    detailContainer: {
        fontFamily: 'roboto',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ButtonContainer: {
        elevation: 8,
        backgroundColor: "#13BD96",
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
    nextButtonContainer: {
        marginTop: 20,
        backgroundColor: "#32363F",
    },
    nextButton: {
        color: 'white',
        fontSize: 18,
    },
    centered : {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default EnableLocationScreen;