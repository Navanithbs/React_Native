import React, { Component } from 'react';
import {
  Container,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from 'native-base';
import AppHeader from '../components/AppHeader';

class BookingLogScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader props={this.props} />
        <Content>
          <Text>This is BookingLogScreen</Text>
        </Content>
      </Container>
    );
  }
}


export default BookingLogScreen;
