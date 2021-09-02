import React,{useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { LinearGradient } from 'expo-linear-gradient';
import { Badge } from 'react-native-elements'
import BookingScreen from './BookingScreen';
import ProfileScreen from './ProfileScreen';
import { Divider } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';

const MyFavPage = (props) => {

    const [SourceAdd,setSourceAdd] = useState(null);
    const [DestAdd,setDestAdd] = useState(null);

    const search = () => {
        if(SourceAdd && DestAdd == null){
            Alert.alert("Invalid Input!","Enter Valid Address",[{text:'okay'}])
            return;
        }
        // console.log(SourceAdd+"  "+DestAdd)
    }

    const close= ()=>{
        props.navigation.goBack()
    }
    
    return (
        <LinearGradient colors={['#D8DEE5', '#FCFCFD','#D8DEE5', '#FCFCFD']} style={{flex: 1}}>
                <View style={{marginLeft:22,width:50}}>
                    <TouchableOpacity
                        onPress={close}>
                        <Ionicons style={{marginTop:60}} name="arrow-back" size={25}/>
                    </TouchableOpacity>
                        {/* <View style={{transform: [{ rotate: "90deg" }]}}><Text>-------</Text></View> */}
                </View>
                <View style={{width: 200,height: 45,left: 40,marginTop:20}}>
                    <Text style={{fontSize:30}}>My Favorites</Text></View>
                    <View>
                        <TouchableOpacity 
                                onPress={()=>{}}
                                style={{marginTop:30,marginLeft:40,marginBottom:10,flexDirection:'row'}}>
                                <Ionicons style={{ marginRight: 20,color:'orange',backgroundColor:'#EEF1F8',padding:8}} name="home" size={13} />
                                <Text>Home</Text>
                        </TouchableOpacity>
                        <Divider style={{marginLeft:45}}/>
                        <TouchableOpacity 
                            onPress={()=>{}}
                            style={{marginTop:20,marginLeft:40,marginBottom:20,flexDirection:'row'}}>
                            <Ionicons style={{ marginRight: 20, color:'orange',backgroundColor:'#EEF1F8',padding:5}} name="briefcase" size={13} />
                            <Text>Office</Text>
                        </TouchableOpacity>
                        <Divider style={{marginLeft:45}}/>
                    </View>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        width:356,
        height:104,
        top:10,
        left:19,
        borderRadius:10,
        backgroundColor: '#ffffff',
        shadowColor:'black',
        justifyContent: 'center',
        padding: 30
    }
})

export default MyFavPage;



