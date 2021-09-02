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

const Tabs = createMaterialBottomTabNavigator();
import { Divider } from 'react-native-paper';
import { TextInput } from 'react-native-gesture-handler';

const Searchpage = (props) => {

    const Loc = props.route.params.Loc;
    const [SrcLocation,setSrcLocation] = useState(props.route.params.pickLocation ? JSON.stringify(props.route.params.pickLocation): ''); 
    const [DropLocation,setDropLocation] = useState(props.route.params.dropLocation ? JSON.stringify(props.route.params.dropLocation): '');

    const close= ()=>{
        props.navigation.goBack()
    }
    
    return (
        <LinearGradient colors={['#D8DEE5', '#FCFCFD','#D8DEE5', '#FCFCFD']} style={{flex: 1}}>
                <View style={{marginLeft:22,width:50}}>
                    <TouchableOpacity
                        onPress={close}>
                        <Ionicons style={{marginTop:60}} name="close" size={25}/>
                    </TouchableOpacity>
                        {/* <View style={{transform: [{ rotate: "90deg" }]}}><Text>-------</Text></View> */}
                </View>
                    <View style={styles.container}>
                        <View style={{flexDirection:'row',padding:10}}>
                            <Ionicons name="locate" size={20} />
                            <TextInput style={{fontSize:14,textAlign:'center',marginLeft:10}}
                            placeholder='Enter Source Address'
                            value={SrcLocation}
                            onChangeText={text=>setSrcLocation(text)}/>
                        </View>

                        <Divider style={{marginLeft:45}}/>

                        <View style={{flexDirection:'row',padding:10}}>
                            <Ionicons name="navigate" size={18} />
                            <TextInput style={{fontSize:14,textAlign:'center',marginLeft:10}}
                            placeholder='Enter Destination Address'
                            value={DropLocation}
                            onChangeText={text=>setDropLocation(text)}/>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity 
                                onPress={()=>{props.navigation.navigate('LocationPicker',{Loc:Loc})}}
                                style={{marginTop:40,marginLeft:40,marginBottom:10,flexDirection:'row'}}>
                                <Ionicons style={{ marginRight: 20,color:'orange',backgroundColor:'#EEF1F8',padding:8}} name="flag" size={13} />
                                <Text>Pick on map</Text>
                        </TouchableOpacity>
                        <Divider style={{marginLeft:45}}/>
                        <TouchableOpacity 
                                onPress={()=>{props.navigation.navigate('MyFavPage')}}
                                style={{marginTop:20,marginLeft:40,marginBottom:20,flexDirection:'row'}}>
                            <Ionicons style={{ marginRight: 20, color:'orange',backgroundColor:'#EEF1F8',padding:5}} name="star" size={13} />
                            <Text>My Favorites</Text>
                        </TouchableOpacity>
                        <Divider style={{marginLeft:45}}/>
                    </View>
                    <TouchableOpacity style={styles.ButtonContainer}
                     onPress={()=>{
                        if(SrcLocation == '' && DropLocation =='')
                        {
                            Alert.alert("Invalid Input!","Enter Source and Destination address",[{text:'okay'}])
                        }
                        else if(DropLocation == '')
                        {
                            Alert.alert("Invalid Input!","Destination address is missing",[{text:'okay'}])
                        }
                        else if(SrcLocation == '')
                        {
                            Alert.alert("Invalid Input!","Source address is missing",[{text:'okay'}])
                        }
                        else{
                            if(Loc.toLowerCase().includes('pick')){
                                props.navigation.navigate('Home',{pickLocation:SrcLocation})
                            }else{
                                props.navigation.navigate('Home',{dropLocation:DropLocation})
                                }
                        }
                        
                        }}>
                            <Text style={styles.allowAccessButton}>Confirm</Text>
                    </TouchableOpacity>
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
    },
    ButtonContainer: {
        top:403,
        width:359,
        height:47,
        borderRadius:7,
        backgroundColor: "#13BD96",
        shadowColor: '#13BD96',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        justifyContent:'center',
        marginLeft:15,
        marginTop:15

    },
    allowAccessButton: {
        fontSize: 17,
        color: "white",
        alignSelf: "center",
    }
})

export default Searchpage;



