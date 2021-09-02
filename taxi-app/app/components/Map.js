import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { MapView } from 'expo';
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
  View,Fab
} from 'native-base';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import isEqual from 'is-equal';
import { debounce } from 'lodash';
import LocationSearch from './LocationSearch';
import SearchResults from './SearchResults';
import marker from '../../assets/maker.png'
import {
  getCurrentRegion,
  getInputData,
  toggleSearchResults,
  getAddressPredictions,
  getSelectedAddress,
  onMapDraged,
} from '../actions/locationActions';
import watch from 'redux-watch';
import store from '../store';

const Marker = MapView.Marker;
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = ASPECT_RATIO * LATITUDE_DELTA;

class Map extends Component {
  constructor() {
    super();
    this.state = {
      isPanding: false,
    };
    this.onPanDrag = debounce(this.onPanDrag, 1000, {
      leading: true,
      trailing: false,
    });
    this.unsubscribe = null
  }
  componentWillMount() {
    // store is THE redux store
    let w = watch(store.getState, 'location.selectedAddress', isEqual);
    this.unsubscribe = store.subscribe(
      w((newVal, oldVal, objectPath) => {
        if (newVal.type == 'pickUp') {
          let { lat, lng } = newVal.pickUp.location;
          this.gotoRegion(lat, lng);
        } else if (newVal.type == 'dropOff') {
          let { lat, lng } = newVal.dropOff.location;
          this.gotoRegion(lat, lng);
        }
      })
    );
  }
  componentWillUnmount() {
    this.unsubscribe()
  }

  onRegionChange = region => {
    const newState = {
      region,
      isPanding: false,
    };

    this.setState(newState);
  };
  
  gotoRegion = (lat, lng) => {
    this.map.animateToRegion(
      {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      2000
    );
  };

  onPanDrag = () => {
    const { isPanding } = this.state;
    if (isPanding) {
      return;
    }
    this.setState({
      isPanding: true,
    });
  };
  
  render() {
    const { pickUp, dropOff } = this.props.selectedAddress || {};
    const { isPanding } = this.state;
    return (
      <View
        style={{
          flex: 1,
        }}>
        <MapView
          style={{
            flex: 1,
          }}
          ref={ref => {
            this.map = ref;
          }}
          showsUserLocation
          loadingEnabled
          showsMyLocationButton={true}
          onRegionChangeComplete={this.onRegionChange}
          onPanDrag={this.onPanDrag}
          initialRegion={this.props.region}>
          {pickUp && (
            <MapView.Marker
              coordinate={{
                latitude: pickUp.location.lat,
                longitude: pickUp.location.lng,
              }}
              pinColor="green"
            />
          )}
          {dropOff && (
            <MapView.Marker
              coordinate={{
                latitude: dropOff.location.lat,
                longitude: dropOff.location.lng,
              }}
              pinColor="blue"
            />
          )}
        </MapView>
        <LocationSearch
          getInputData={this.props.getInputData}
          toggleSearchResults={this.props.toggleSearchResults}
          getAddressPredictions={this.props.getAddressPredictions}
          inputData={this.props.inputData}
        />
        {(this.props.resultType.pickUp || this.props.resultType.dropOff) && (
          <SearchResults
            predictions={this.props.predictions}
            getSelectedAddress={this.props.getSelectedAddress}
          />
        )}
        <View
          style={[styles.markerFixed, isPanding ? styles.isPanding : null]}
          pointerEvents="none">
          <Image
            style={styles.marker}
            resizeMode="contain"
            source={marker}
          />
        </View>
        <Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={{ backgroundColor: '#fb9403' }}
            position="bottomRight"
            onPress={() => this.map.animateToRegion(this.props.region, 2000)}>
            <Icon type='Foundation' name="target-two" />
          </Fab>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  marker: {
    height: 48,
    width: 48,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
    zIndex: 2,
    height: 48,
    width: 48,
  },
  isPanding: {
    marginTop: -60,
  },
});

const mapActionToProps = {
  getCurrentRegion,
  getInputData,
  toggleSearchResults,
  getAddressPredictions,
  getSelectedAddress,
  onMapDraged,
};

const mapStateToProps = state => {
  return {
    resultType: state.location.resultType,
    predictions: state.location.predictions,
    inputData: state.location.inputData,
    selectedAddress: state.location.selectedAddress,
  };
};

export default connect(mapStateToProps,mapActionToProps)(Map);
