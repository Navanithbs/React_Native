import React,{useEffect, useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Alert} from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Badge } from 'react-native-elements'
import BookingScreen from './BookingScreen';
import ProfileScreen from './ProfileScreen';
import { Divider } from 'react-native-paper';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

// const tabBarHeight = useBottomTabBarHeight();
const Tabs = createMaterialBottomTabNavigator();
const HomeScreen = (props) => {

    const SrcLocation = 'Enter Starting location'; 
    const DropLocation = 'Enter Drop Location';
    const [pasg,setPasg] = useState(0)
    let pas = 0;

    const search = () => {
        if(SourceAdd && DestAdd == null){
            Alert.alert("Invalid Input!","Enter Valid Address",[{text:'okay'}])
            return;
        }
    }

    const inc = ()=>{
        if(pasg<6){
            let i = pasg
            ++i
            setPasg(i)
        }
        else{
            setPasg(1)
        }
    } 
    
    return (
        <View style={{ flex: 1, backgroundColor: '#141517'}}>
                <View style={{flexDirection:'row',marginLeft:80,marginTop:60}}>
                    <TouchableOpacity style={{marginRight:10,backgroundColor:'#515A6B',borderRadius:100,width:100,height:47,justifyContent:'center'}}>
                        <Text style={{fontSize: 15, color: "white", alignSelf: "center"}}>Offer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft:10,backgroundColor:'#939AA8',borderRadius:100,width:100,height:47,justifyContent:'center'}}>
                        <Text style={{fontSize: 15, color: "white", alignSelf: "center"}}>Request</Text>
                    </TouchableOpacity>

                    <View style={{marginLeft:39,flexDirection:'row'}}>
                    <TouchableOpacity
                        color="white"
                        onPress={()=>{}}>
                        <Ionicons style={{marginTop:15 }} name="notifications-outline" size={25} color="white" />
                    </TouchableOpacity>
                    <View >
                            <Badge value="2" status="success" />
                    </View>
                </View>
                {/* <View style={{transform: [{ rotate: "90deg" }]}}><Text>-------</Text></View> */}
                </View>
                    <View style={styles.container}>
                        <View>
                            <Text style={{color:'#798293'}}>Leaving From</Text>
                        </View>
                        <View style={{flexDirection:'row',padding:10}}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="locate" size={19} />
                            <TouchableOpacity onPress={()=>props.navigation.navigate('Search',{Loc:'PickUp Location'})}>
                            <Text>{SrcLocation}</Text>
                            </TouchableOpacity>
                        </View>

                        <Divider />

                        <View>
                            <Text style={{color:'#798293',marginTop:5}}>Going To</Text>
                        </View>
                        <View style={{flexDirection:'row',padding:10}}>
                            <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="navigate" size={19} />
                            <TouchableOpacity onPress={()=>props.navigation.navigate('Search',{Loc:'Drop Location'})}>
                            <Text>{DropLocation}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:180}}>
                        <TouchableOpacity style={{width:93,backgroundColor:'#939AA8',height:96,marginLeft:103,alignItems:'center',borderRadius:7}}>
                        <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="calendar" size={40} />
                        <Text style={{fontSize:14}}>Today</Text>
                        <Text style={{fontSize:17,marginTop:4}}>17:00</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={inc}
                        style={{width:88,backgroundColor:'#939AA8',height:96,marginLeft:15,alignItems:'center',borderRadius:7}}>
                        <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="person-add" size={40} />
                        <Text style={{fontSize:14}}>Passengers</Text>
                        <Text style={{fontSize:17,marginTop:4}}>{pasg}</Text>
                        </TouchableOpacity>
                    </View>
                     <View>
                        <TouchableOpacity onPress={search} style={styles.ButtonContainer}>
                            <Text style={styles.allowAccessButton}>Search</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{marginLeft:157,marginTop:20}}>
                        <Text style={{color:'#939AA8'}}>Use a Ride Code</Text>
                    </TouchableOpacity>
                    
                    {/* <View style={{backgroundColor:'#31373E',width:400,height:104,borderRadius:40,marginTop:100}}>
                        <TouchableOpacity style={{backgroundColor:'#798293',width:70,height:70,borderRadius:100,marginLeft:172,marginTop:-40,alignItems:'center',justifyContent:'center'}}>
                        <Ionicons style={{ marginRight: 5, marginLeft: 5 }} name="search" size={30} color='white'/>
                        </TouchableOpacity>
                    </View> */}
        </View>

    );
}

const BookingTabNav = ()=>{
    return(
    <Tabs.Navigator
        // initialRouteName="HomeScreen"
        barStyle={{ backgroundColor: '#31373E', position: 'absolute',
        overflow: 'hidden',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,}}
        screenOptions={{headerShown: false}}
        // tabBarOptions={{ showLabel: false }}
    >
         <Tabs.Screen name=".." component={HomeScreen} 
        options = {{
            tabBarIcon: tabInfo => { return (<Ionicons name="chatbubbles" size={30} color='white' />); }
        }}/>
        <Tabs.Screen name="." component={BookingScreen}
        options = {{
            tabBarIcon: tabInfo => { return (<Ionicons name="car" size={30} color='white' />); }
        }}/>
          <Tabs.Screen name="..." component={HomeScreen}
        options = {{
            tabBarIcon: tabInfo => { return (
            <View style={{
                position: 'absolute',
                bottom:-20,
                height: 58,
                width: 60,
                borderRadius: 100,
                backgroundColor: '#798293',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'white',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.9,
                shadowRadius: 3,
              }}>
                <Ionicons name="search" size={30} color='white'/>
                </View>); }
        }}/>
         <Tabs.Screen name="...." component={HomeScreen}
        options = {{
            tabBarIcon: tabInfo => { return (<Ionicons name="wallet" size={30} color='white'/>); }
        }}/>
         <Tabs.Screen name="....." component={ProfileScreen}
        options = {{
            tabBarIcon: tabInfo => { return (<Ionicons name="body" size={30} color='white'/>); }
        }}/>
    </Tabs.Navigator>
    )
} 


const styles = StyleSheet.create({
    container: {
        width:296,
        height:144,
        top:60,
        left:59,
        borderRadius:6,
        backgroundColor: '#ffffff',
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    number: {
        flexDirection: 'row',
        height: 50,
        width: 350,
        margin: 4,
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: '#68727C',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    ButtonContainer: {
        width:203,
        height:47,
        borderRadius:7,
        backgroundColor: "#13BD96",
        shadowColor: '#13BD96',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 3,
        justifyContent:'center',
        marginLeft:103,
        marginRight:108,
        marginTop:15

    },
    allowAccessButton: {
        fontSize: 17,
        color: "white",
        alignSelf: "center",
    }
})

export default BookingTabNav;



