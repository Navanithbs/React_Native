import React, { Component } from 'react';  
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Pulse from 'react-native-pulse';

const origin = {latitude: 12.9716, longitude: 77.5946};
const destination = {latitude: 12.9507, longitude: 77.5848};
const MapScreen = (props) => {
  const {Latitude} = props.route.params
  const {Longitude} = props.route.params
  const {Title} = props.route.params
  
  return (  
    <View style={styles.MainContainer}>  
      <MapView  
        style={styles.mapStyle}  
        showsUserLocation={false}  
        zoomEnabled={true}  
        zoomControlEnabled={true} 
        // onPress={selplace} 
        initialRegion={{  
          latitude: Latitude,   
          longitude: Longitude,  
          latitudeDelta: 0.0922,  
          longitudeDelta: 0.0421,  
        }}>  
        <Marker  
          draggable
          coordinate={{latitude:Latitude,longitude:Longitude}}  
          title={Title}
        />  
      </MapView>  
      <View style={styles.numberContainer}>
        <TouchableOpacity
          color="white"
          onPress={()=>props.navigation.navigate('Home',{Latitude:Latitude,Longitude:Longitude,Title:Title})}>
          <Text 
          style={{ fontSize: 20,color:'white'}}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>  
    
  );  
}  
MapScreen.navigationOptions = navData =>{
  return{
    headerRight:<TouchableOpacity
    onPress={back}
    >
      <Text>Save</Text>
    </TouchableOpacity>
  }
}
const styles = StyleSheet.create({  
  
numberContainer: {
    padding: 10,
    height: 50,
    width: 350,
    margin: 4,
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#68727C',
    borderRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center'
    
},
MainContainer: {  
  position: 'absolute',  
  top: 0,  
  left: 0,  
  right: 0,  
  bottom:0,  
  alignItems: 'center',  
  justifyContent: 'flex-end',  
},  
mapStyle: {  
  position: 'absolute',  
  top: 0,  
  left: 0,  
  right: 0,  
  bottom: 0,  
},
CountryCode: {
  fontSize: 20,
  height: 40,
  width: 300,
  margin: 12,
  borderWidth: 1,
  backgroundColor: '#68727C',
  borderRadius: 10,
  justifyContent:'center'
},
})
export default MapScreen;
