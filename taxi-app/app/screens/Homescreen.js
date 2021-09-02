import React from 'react';
import {Container,  Icon} from 'native-base';
import { connect } from 'react-redux';
import Map from '../components/Map';
import AppHeader from '../components/AppHeader';
import { getCurrentLocation, getInputData } from '../actions/locationActions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    drawerIcon: () => (
      <Icon ios="ios-home" android="md-home" style={{ color: 'white'}}/>
    ),
  };

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  render() 
  {
    return (
      <Container>
        <AppHeader props={this.props} />
        <Map region={this.props.region.region} />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    region: state.location,
    inputDate: state.inputData,
    predictions: state.predictions,
  };
};
const mapActionsToProps = { getCurrentLocation, getInputData };

export default connect(mapStateToProps,mapActionsToProps)(HomeScreen);
