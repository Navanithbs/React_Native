/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(6,157,255,1.00)' : ' rgba(0, 0, 0, 0.8)';
    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 5,
                backgroundColor,
                marginBottom: 220,
            }}
        />
    );
};


function CarouselCards({ navigation }) {
    return (
        <Onboarding
            showSkip={false}
            bottomBarHighlight={false}
            titleStyles={{ fontSize: 30, fontWeight: 'bold', color:'#4D545E' }} // set default color for the title
            subTitleStyles={{color:'#4D545E' }}
            // onDone={() => navigation.replace('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#FFC98B',
                    image: <Image source={require('../../assets/carousel_1.jpg')} style={styles.image} />,
                    title: 'Commute in the City',
                    subtitle: 'We provide the effcient mode of transportation in the city',
                    containerStyles: { paddingBottom: 30 }
                },
                {
                    backgroundColor: '#B5A7B6',
                    image: <Image source={require('../../assets/carousel_2.jpg')} style={styles.image} />,
                    title: 'Safe and Cost Efficient',
                    subtitle: 'Safe & Hassle free rides with pocket freindly costs for commuting in the city',
                },
                {
                    backgroundColor: '#C6E1FF',
                    image: <Image source={require('../../assets/carousel_3.jpg')} style={styles.image} />,
                    title: 'Delivery at Local',
                    subtitle: 'Send or Recieve your products inside the city',
                }
            ]}
        />
    );
}

const styles = StyleSheet.create({
    next: {
        marginRight: 50,
        backgroundColor: '#069DFF',
        width: 300,
        height: 50,
        marginBottom: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 450
    }
});

export default CarouselCards;
