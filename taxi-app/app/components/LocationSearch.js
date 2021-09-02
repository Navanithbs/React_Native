import React from 'react';
import { Dimensions, Text } from 'react-native';
import { Input, Body, View, InputGroup, Item, Icon } from 'native-base';
const LocationSearch = ({
  getInputData,
  toggleSearchResults,
  getAddressPredictions,
  inputData,
}) => {
  function handleInput(key, val) {
    getInputData({
      key,
      value: val,
    });
    getAddressPredictions();
  }
  return (
    <View style={styles.searchBox}>
      <Item style={styles.inputWrapper}>
        <Icon
          type="FontAwesome"
          name="map-pin"
          style={{
            padding: 10,
            color:"green",
            size:15
          }}
          
          
        />
        <Input
          style={styles.inputSearch}
          placeholder="Choose pick-up location"
          onChangeText={handleInput.bind(this, 'pickUp')}
          onFocus={() => toggleSearchResults('pickUp')}
          value={inputData.pickUp}
        />
      </Item>
      <Item style={styles.secondInputWrapper}>
        <Icon
          type="FontAwesome"
          name="map-pin"
          style={{
            padding: 10,
            color:"red",
            size:15
          }}
        />
        <Input
          style={styles.inputSearch}
          placeholder="Choose drop-off location"
          onChangeText={handleInput.bind(this, 'dropOff')}
          onFocus={() => toggleSearchResults('dropOff')}
          value={inputData.dropOff}
        />
      </Item>
    </View>
  );
};

var width = Dimensions.get('window').width; //full width
const styles = {
  searchBox: {
    top: 0,
    position: 'absolute',
    width: width,
  },
  inputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 0,
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  secondInputWrapper: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 0,
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  inputSearch: {
    fontSize: 14,
  },
  label: {
    fontSize: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 0,
  },
};

export default LocationSearch;
