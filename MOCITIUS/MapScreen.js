import React, { Component } from 'react';  
import { StyleSheet, View, TextInput } from 'react-native';  
import MapView from 'react-native-maps';  
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Pulse from 'react-native-pulse';

const origin = {latitude: 12.9716, longitude: 77.5946};
const destination = {latitude: 12.9507, longitude: 77.5848};

// const [selectedLocation, setSelectedLocation] = useState(initialLocation);
// const selectLocationHandler = event => {
//   if (readonly) {
//     return;
//   }
//   setSelectedLocation({
//     lat: event.nativeEvent.coordinate.latitude,
//     lng: event.nativeEvent.coordinate.longitude
//   });
// };

// const selplace = event=>{console.log(event)}

const MapScreen = (props) => {
  return (  
    <View style={styles.MainContainer}>  

      <MapView  
        style={styles.mapStyle}  
        showsUserLocation={false}  
        zoomEnabled={true}  
        zoomControlEnabled={true} 
        // onPress={selplace} 
        initialRegion={{  
          latitude: 12.9716,   
          longitude: 77.5946,  
          latitudeDelta: 0.0922,  
          longitudeDelta: 0.0421,  
        }}>  
        {/* <View>
        <TextInput
          style={styles.CountryCode}
          color='white'
          keyboardType="default"
          value={'Enter Start Location'}
        />
        <TextInput
          style={styles.CountryCode}
          color='white'
          keyboardType="default"
          value={'Enter Destination Location'}
        />
        </View> */}

        {/* <Marker  
          pinColor={'#000000'}
          draggable
          coordinate={origin}    
        />  */}

        <Pulse
          color="orange"
          numPulses={3}
          diameter={100}
          speed={20}
          duration={2000}
          coordinate={origin}
        />
        <Marker  
          draggable
          coordinate={destination}    
        />  
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey='AIzaSyCZ0U_A3GrDoYX1Af5IESrygJq0fkEysvc'
          strokeColor="#bf8221"
          strokeWidth={4}
		    />
      </MapView>  
        
    </View>  
  );  
}  
MapScreen.navigationOptions = navData=>{
  return {
    headerTitle: 'mapScreen'
  }
}

const styles = StyleSheet.create({  
MainContainer: {  
  position: 'absolute',  
  top: 250,  
  left: 0,  
  right: 0,  
  bottom: 0,  
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
