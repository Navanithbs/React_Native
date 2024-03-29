import React, { Component } from 'react';
import {
  GET_CURRENT_LOCATION,
  GET_INPUT_DATA,
  GET_CURRENT_REGION,
  TOGGLE_SEARCH_RESULTS,
  GET_ADDRESS_PREDICTIONS,
  GET_SELECTED_ADDRESS,
  MAP_DRAGED,
  GET_DISTANCE_MATRIX,
} from './types';
import GPlaces from 'react-native-gplaces';
import Geocoder from 'react-native-geocoder';
import axios from 'axios';
const places = new GPlaces({
  key: 'AIzaSyDUYbTR-3PDWPhgxjENs4yf35g2eHc641s', //'AIzaSyAhZ0T_u35s-nuKtDnpHfIjZpgScKzeK38', // https://developers.google.com/maps/documentation/javascript/get-api-key
});

Geocoder.fallbackToGoogle('AIzaSyDUYbTR-3PDWPhgxjENs4yf35g2eHc641s');
export function getCurrentLocation() {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      position => {
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: position,
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
}

export function getCurrentRegion(region) {
  return dispatch => {
    dispatch({
      type: GET_CURRENT_REGION,
      payload: region,
    });
  };
}

export function getInputData(data) {
  return dispatch => {
    dispatch({
      type: GET_INPUT_DATA,
      payload: data,
    });
  };
}

export function toggleSearchResults(data) {
  return dispatch => {
    dispatch({
      type: TOGGLE_SEARCH_RESULTS,
      payload: data,
    });
  };
}

export function getAddressPredictions() {
  return (dispatch, store) => {
    let searchQuery = store().location.resultType.pickUp
      ? store().location.inputData.pickUp
      : store().location.inputData.dropOff;
    places
      .search(searchQuery, {
        components: 'country:ng',
        types: 'establishment',
      })
      .then(r => {
        dispatch({
          type: GET_ADDRESS_PREDICTIONS,
          payload: r,
        });
      })
      .catch(console.error);
  };
}

export function getSelectedAddress(data) {
  return (dispatch, store) => {
    places
      .getPlaceDetails(data.place_id, {
        fields: 'geometry',
      })
      .then(r => {
        let mergedData = { ...data, ...r.geometry };
        dispatch({
          type: GET_SELECTED_ADDRESS,
          payload: mergedData,
        });
      })
      .then(() => {
        //console.log('------',store());
        if (
          store().location.selectedAddress.pickUp &&
          store().location.selectedAddress.dropOff
        ) {
          axios
            .get('https://maps.googleapis.com/maps/api/distancematrix/json', {
              params: {
                origins:
                  store().location.selectedAddress.pickUp.location.lat +
                  ',' +
                  store().location.selectedAddress.pickUp.location.lng,
                destinations:
                  store().location.selectedAddress.dropOff.location.lat +
                  ',' +
                  store().location.selectedAddress.dropOff.location.lng,
                mode: 'driving',
                key: 'AIzaSyDUYbTR-3PDWPhgxjENs4yf35g2eHc641s',
              },
            })
            .then(res => {
              //console.log(res);
              dispatch({
                type: GET_DISTANCE_MATRIX,
                payload: res.data,
              });
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      })
      .catch(console.error);
  };
}

export function onMapDraged(region) {
  return (dispatch, store) => {
    Geocoder.from(region)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];
        console.log(json);
        dispatch({
          type: MAP_DRAGED,
          payload: json.results[0],
        });
      })
      .catch(error => console.warn(error));
  };
}
