import React from 'react';
import {Text, View, TextComponent, StyleSheet} from 'react-native';

const Header = props=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:90,
        padding:26,
        paddingTop:199,
        backgroundColor:"#f7286b",
        alignItems:"center",
        justifyContent:'center'
    },
    headerText:{
        color:'black',
        fontSize:21
    
    }
});

export default Header;