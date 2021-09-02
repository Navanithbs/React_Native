import React, { Component } from 'react';  
import { StyleSheet, View, TextInput } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';  
import MapViewDirections from 'react-native-maps-directions';
  
const O2DMAP = (props) => {
	const origin = {latitude: 37.3318456, longitude: -122.0296002};
	const destination = {latitude: 37.771707, longitude: -122.4053769};
	const GOOGLE_MAPS_APIKEY = 'AIzaSyCZ0U_A3GrDoYX1Af5IESrygJq0fkEysvc';
	return (
		<View style={styles.MainContainer}>  
		<MapView 
		showsUserLocation={false}  
        zoomEnabled={true}  
        zoomControlEnabled={true}  
        initialRegion={{  
          latitude: 28.579660,   
          longitude: 77.321110,  
          latitudeDelta: 0.0922,  
          longitudeDelta: 0.0421,  
        }}>
		<Marker  
          coordinate={destination}
        />  
		<MapViewDirections
			origin={origin}
			destination={destination}
			apikey={GOOGLE_MAPS_APIKEY}
		/>
		</MapView>
		</View>
	)}
	const styles = StyleSheet.create({  
		MainContainer: {  
		  position: 'absolute',  
		  top: 0,  
		  left: 0,  
		  right: 0,  
		  bottom: 0,  
		  alignItems: 'center',  
		  justifyContent: 'flex-end',  
		}
	})
export default O2DMAP;
