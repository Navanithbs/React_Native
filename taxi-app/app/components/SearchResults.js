import React from 'react';
import { Dimensions, Text } from 'react-native';
import { View, List, ListItem, Left, Body, Item, Icon } from 'native-base';

var width = Dimensions.get('window').width; //full width

const SearchResults = ({ predictions, getSelectedAddress }) => {
  function _getSelectedAddress(item) 
  {
    getSelectedAddress(item);
  }
  return (
    <View style={styles.searchResultsWrapper}>
      <List
        dataArray={predictions}
        renderRow={item => (
          <View>
            <ListItem onPress={() => _getSelectedAddress(item)} button avatar>
              <Left style={styles.leftContainer}>
                <Icon
                  type="FontAwesome"
                  style={styles.leftIcon}
                  name="map-marker"
                />
              </Left>
              <Body>
                <Text style={styles.primaryText}>
                  {item.structured_formatting.main_text}
                </Text>
                <Text style={styles.secondaryText}>
                  {item.structured_formatting.secondary_text}
                </Text>
              </Body>
            </ListItem>
          </View>
        )}
      />
    </View>
  );
};

const styles = {
  searchResultsWrapper: {
    top: 160,
    position: 'absolute',
    width: width,
    height: 1000,
    backgroundColor: '#fff',
    opacity: 0.8,
  },
  primaryText: {
    fontWeight: 'bold',
    color: '#373737',
  },
  secondaryText: {
    fontStyle: 'italic',
    color: '#7D7D7D',
  },
  leftContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderLeftColor: '#7D7D7D',
  },
  leftIcon: {
    fontSize: 20,
    color: '#7D7D7D',
  },
  distance: {
    fontSize: 12,
  },
};

export default SearchResults;
