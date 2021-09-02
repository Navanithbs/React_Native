import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ListView,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  View,
} from 'native-base';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

class ProfileScreen extends Component {
  static navigationOptions = {
    header: null,
    drawerIcon: () => (
      <Icon ios="ios-contact" android="md-contact" style={{ color: 'white' }} />
    ),
  };

  render() {
    return (
      <Container>
        <AppHeader props={this.props} />
        <Content>
          <View style={styles.header} />
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar6.png',
            }}
          />
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>Mobile Number: 0801234567</Text>
              <Text style={styles.info}>Email: willerz.cadera@mail.com</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>EDIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fb9403',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  name: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  info: {
    fontSize: 16,
    color: '#fb9403',
    marginTop: 10,
  },
  buttonContainer: {
    backgroundColor: '#000',
    paddingVertical: 15,
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default ProfileScreen;
