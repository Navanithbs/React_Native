import React,{useState,useRef,useEffect} from 'react';
import { View, StyleSheet, Button ,Text} from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };

const SearchScreen = props => {
    const [lat,setlat]=useState(null);
    const [lng,setlng]=useState(null);
    const [Title,setTitle]=useState(null);
    
    // const ref = useRef();
    // useEffect(() => {
    // ref.current?.setAddressText('Some Text');
    // }, []);
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key:'AIzaSyCZ0U_A3GrDoYX1Af5IESrygJq0fkEysvc',
          language: 'en',
          // components: 'country:us'
        }}
        currentLocation={true}
        fetchDetails={true}
        currentLocationLabel='Your Current Location'
        predefinedPlaces={[homePlace, workPlace]}
        
        onPress={(data,details) => {
            setlat(details.geometry.location.lat)
            setlng(details.geometry.location.lng)
            setTitle(details.formatted_address)
            props.navigation.navigate('Map',{Latitude:details.geometry.location.lat,
              Longitude:details.geometry.location.lng,Title:details.formatted_address})
        }}
        onFail={(error) => console.error(error)}
        // getCurrentLocation={(state)=>{console.log(state)}}
        requestUrl={{
          url:'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          useOnPlatform: 'web'
        }}
      />
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: '#ecf0f1',  
  }
});

export default SearchScreen;
