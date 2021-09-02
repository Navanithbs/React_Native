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

class BookingScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader props={this.props} />
        <Content>
          <Text>This is Content Section</Text>
        </Content>
      </Container>
    );
  }
}

export default BookingScreen;
