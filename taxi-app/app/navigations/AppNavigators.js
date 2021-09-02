import React from 'react';
import {
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  DrawerItems,
} from 'react-navigation';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Asyncstorage,
} from 'react-native';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Button,
} from 'native-base';
import SignInScreen from '../screens/auth/SigninScreen';
import WelcomeScreen from '../screens/auth/WelcomeScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/Homescreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookingScreen from '../screens/BookingScreen';
import BookingLogScreen from '../screens/BookingLogScreen';

const SideBar = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: getStatusBarHeight(),
      }}>
      <Image
        style={{ height: 120, width: 120, borderRadius: 60 }}
        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
      />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
      <TouchableOpacity onPress={()=>
              Alert.alert(
                'Log out',
                'Do you want to logout?',
                [
                  {text: 'Cancel', onPress: () => {return null}},
                  {text: 'Confirm', onPress: () => {
                    Asyncstorage.clear();
                    props.navigation.navigate('Login')
                  }},
                ],
                { cancelable: false }
              )  
            }>
              <Text style={{margin: 16,fontWeight: 'bold'}}>Logout</Text>
            </TouchableOpacity>
    </ScrollView>
  </SafeAreaView>
);

const AuthTabNavigator = createMaterialTopTabNavigator(
  {
    Signin: SignInScreen,
    Register: RegisterScreen,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        color: 'white',
      },
      tabStyle: {
        color: 'white',
      },
      style: {
        backgroundColor: '#fb9403',
        paddingTop: getStatusBarHeight(),
        height: 54 + getStatusBarHeight(),
      },
    },
  }
);

const BookingsTabNavigator = createBottomTabNavigator(
  {
    Booking: {
      screen: BookingScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            ios="ios-timer"
            android="md-timer"
            color={tintColor}
            size={24}
          />
        ),
      }),
    },
    Log: {
      screen: BookingLogScreen,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon
            ios="ios-stopwatch"
            android="md-stopwatch"
            color={tintColor}
            size={24}
          />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        backgroundColor: '#fb9403',
      },
    },
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Bookings: {
      screen: BookingsTabNavigator,
      navigationOptions: {
        header: null,
        drawerIcon: () => (
          <Icon
            ios="ios-bookmark"
            android="md-bookmark"
            style={{ color: 'white' }}
          />
        ),
      },
    },
    Profile: ProfileScreen,
  },
  {
    contentComponent: SideBar,
    drawerBackgroundColor: '#fb9403',
    contentOptions: {
      activeBackgroundColor: 'black',
      activeTintColor: 'white',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);

export { AuthTabNavigator, AppDrawerNavigator };
