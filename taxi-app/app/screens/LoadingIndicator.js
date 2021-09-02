import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import watch from 'redux-watch';
import store from '../store';
import isEqual from 'is-equal';
import { getCurrentLocation } from '../actions/locationActions';
import Pulse from 'react-native-pulse';
import { Constants, Location, Permissions } from 'expo';

const standardMessage = 'Getting your location';
const longLoadingMessage = 'We still working on it';
const messagePostfixes = ['', '.', '..', '...'];

class LoadingIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingCount: 0,
    };
    this.unsubscribe = null;
  }
  componentWillMount() {
    Location.getProviderStatusAsync().then(r => {
      console.log(r);
      if(r.locationServicesEnabled) {
        this.props.getCurrentLocation();
      }
    });
    
    let w = watch(store.getState, 'location.region', isEqual);
    if (store.getState().location.region) {
      setInterval(() => {
        this.props.navigation.navigate('App');
      }, 3000);
    }
    this.unsubscribe = store.subscribe(
      w((newVal, oldVal, objectPath) => {
        this.props.navigation.navigate('App');
      })
    );
    this.timerId = setInterval(() => {
      let { loadingCount } = this.state;
      this.setState({ ...this.state, loadingCount: ++loadingCount });
    }, 700);
  }

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    this.unsubscribe();
  }

  render() {
    const postFixIndex = this.state.loadingCount % messagePostfixes.length;
    const messagePostfix = messagePostfixes[postFixIndex];
    const loadingTakesLonger = this.state.loadingCount >= 10;
    const message = loadingTakesLonger ? longLoadingMessage : standardMessage;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{message + messagePostfix}</Text>
        <Pulse
          color="orange"
          numPulses={3}
          diameter={400}
          speed={20}
          duration={2000}
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },

  text: {
    color: 'white',
  },
});

const mapStateToProps = state => {
  return {
    region: state.location,
  };
};

const mapActionsToProps = { getCurrentLocation };

export default connect(mapStateToProps,mapActionsToProps)(LoadingIndicator);
