import React, { Component } from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const AppHeader = ({props}) => {
  return (
    <Header
      style={styles.header}
      iosBarStyle="light-content"
      androidStatusBarColor="#fb9403">
      <Left>
        <Button transparent onPress={() => props.navigation.openDrawer()}>
          <Icon style={styles.icon} ios="ios-menu" android="md-menu" />
        </Button>
      </Left>
      <Body>
        <Title style={styles.headerText}>Tripple A</Title>
      </Body>
      <Right>
        <Icon
          style={styles.icon}
          ios="ios-notifications"
          android="md-notifications"
        />
      </Right>
    </Header>
  );
};

const styles = {
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 14,
  },
  logo: {
    width: 50,
    height: 50,
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight(),
    backgroundColor: '#fb9403',
  },
};

export default AppHeader;
