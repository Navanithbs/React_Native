import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import {
  AuthStackNavigator,
  AppStackNavigator,
  AuthTabNavigator,
  AppDrawerNavigator,
} from './AppNavigators';
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import LoadingIndicator from '../screens/LoadingIndicator';

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    GCL: LoadingIndicator,
    App: AppDrawerNavigator,
    Auth: AuthTabNavigator,
  })
);

export default AppContainer;
