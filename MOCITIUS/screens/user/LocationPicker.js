import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LocationPicker = props => {

  const [selectedLocation, setSelectedLocation] = useState();
  const Loc = props.route.params.Loc;

  const mapRegion = {
    latitude: 12.9716,
    longitude: 77.5946,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = event => {
    // console.log(event.nativeEvent)
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

  return (
      <View style={styles.MainContainer}>
        <MapView
         style={styles.mapStyle}
        initialRegion={mapRegion}
        onPress={selectLocationHandler}
        >
        {markerCoordinates && (
            <Marker title={Loc} coordinate={markerCoordinates} />
        )}
        </MapView>
        <View style={styles.numberContainer}>
            <TouchableOpacity
            color="white"
            onPress={()=>{
              if(Loc.toLowerCase().includes('pick')){
                props.navigation.navigate('Search',{pickLocation:selectedLocation})
              }else{
                props.navigation.navigate('Search',{dropLocation:selectedLocation})
              }
              
              }}>
            <Text 
            style={{ fontSize: 20,color:'white'}}>Confirm</Text>
            </TouchableOpacity>
        </View>
      </View>    
  );
};


const styles = StyleSheet.create({
 mapStyle: {  
    position: 'absolute',  
    top: 0,  
    left: 0,  
    right: 0,  
    bottom: 0,  
    },
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
  }
});

export default LocationPicker;
