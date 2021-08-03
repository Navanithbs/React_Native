import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
 const StartGameScreen = props => {
     return(
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game :</Text>
            <View style={styles.inputCon}>
                <Text>--------------------------------------------</Text>
                <Text>Select a Number : </Text>
                <Text>--------------------------------------------</Text>
                <TextInput/>
                <View style={styles.buttoncon}>
                    <Button title="Reset" onPress={()=>{}}/>
                    <Text>---------</Text>
                    <Button title="confirm" onPress={()=>{}}/>
                </View>
            </View>
        </View>   
     )
 }

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center'
    },
    title:{
        fontSize:20
    },
    inputCon:{
        fontSize:18,
        alignItems:'center',
        alignItems:'center',
        shadowColor:'black'
    },
    buttoncon:{
        flexDirection:'row',
        alignItems:'center',
    }
    
})

 export default StartGameScreen;