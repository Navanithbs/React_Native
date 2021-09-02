import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

export default class WelcomeScreen extends Component {
  state = {
    showRealApp: false,
  };

  static navigationOptions = {
    header: null,
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    this.props.navigation.navigate('Auth');
  };
  
  render() {
    return <AppIntroSlider slides={slides} onDone={this._onDone} />;
  }
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
});

const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../../assets/snack-icon.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../../assets/snack-icon.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../../assets/snack-icon.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
