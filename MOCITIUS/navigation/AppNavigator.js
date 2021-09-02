import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EnableLocationScreen from '../screens/user/EnableLocationScreen';
import LoginScreen from '../screens/user/LoginScreen';
import LoginWithOtpScreen from '../screens/user/LoginWithOtpScreen';
import LoginWithMpinScreen from '../screens/user/LoginWithMpinScreen';
import SignUpScreen from '../screens/user/SignupScreen';
import EnterOtpScreen from '../screens/user/EnterOtpScreen';
import CarouselCards from '../screens/carousel/CarouselCards';
import MapScreen from '../screens/user/MapScreen';
import HomeScreen from '../screens/user/HomeScreen';
import SearchScreen from '../screens/user/SearchScreen';
import ForgotPasswordScreen from '../screens/user/ForgotPasswordScreen';
import BookingScreen from '../screens/user/BookingScreen';
import BookingLogScreen from '../screens/user/BookingLogScreen';
import VarifyEmailScreen from '../screens/user/VarifyEmailScreen';
import Search from '../screens/user/Search'
import LocationPicker from '../screens/user/LocationPicker';
import MyFavPage from '../screens/user/MyFav';
import Calender from '../screens/user/DateTimePicker';

const MyStack = createStackNavigator();

const AppNavigator = props => {
    return (
        <NavigationContainer>
            <MyStack.Navigator screenOptions={{headerShown: false}}>
                {/* <MyStack.Screen name="EnableLocation" component={EnableLocationScreen} />
                <MyStack.Screen name="Carousel" component={CarouselCards} />
                <MyStack.Screen name="Login" component={LoginScreen} />
                <MyStack.Screen name="LoginWithOtp" component={LoginWithOtpScreen} />
                <MyStack.Screen name="LoginWithMpin" component={LoginWithMpinScreen} />
                <MyStack.Screen name="Signup" component={SignUpScreen} />
                <MyStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <MyStack.Screen name="VarifyEmail" component={VarifyEmailScreen} />
                <MyStack.Screen name="EnterOtp" component={EnterOtpScreen} /> */}
                {/* <MyStack.Screen name="Home" component={HomeScreen}/>
                <MyStack.Screen name="Search" component={Search}/>
                <MyStack.Screen name="LocationPicker" component={LocationPicker}/>
                <MyStack.Screen name="MyFavPage" component={MyFavPage}/>
                <MyStack.Screen name="SearchScreen" component={SearchScreen}/>
                <MyStack.Screen name="Map" component={MapScreen}/> */}
                <MyStack.Screen name="Calender" component={Calender}/>
                {/* <MyStack.Screen name="BookingLogScreen" component={BookingLogScreen}/>
                <MyStack.Screen name="BookingScreen" component={BookingScreen}/> */}

            </MyStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;















// const MapNavigator = createStackNavigator(
//     {
//       Home: {
//         screen: HomeScreen
//       },
//       SearchScreen: {
//         screen: SearchScreen
//       },
//       Map: MapScreen
//     }
//   );

//   const BookNavigator = createStackNavigator(
//     {
//       Booking: {
//         screen: BookingScreen
//       },
//       BookingLog: {
//         screen: BookingLogScreen
//       }
//     }
//   );

//   const tabScreenConfig = {
//     MapNav: {
//       screen: MapNavigator,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return (
//             <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
//           );
//         },
//         tabBarColor: Colors.primaryColor,
//         tabBarLabel:Maps
//       }
//     },
//     BookNav: {
//       screen: BookNavigator,
//       navigationOptions: {
//         tabBarIcon: tabInfo => {
//           return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
//         },
//         tabBarColor: Colors.accentColor,
//         tabBarLabel:Bookings
//       }
//     }
//   };

//   const TabNavigator =
//   Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         activeTintColor: 'white',
//         shifting: true,
//         barStyle: {
//           backgroundColor: Colors.primaryColor
//         }
//       })
//     : createBottomTabNavigator(tabScreenConfig, {
//         tabBarOptions: {
//           labelStyle: {
//             fontFamily: 'open-sans'
//           },
//           activeTintColor: Colors.accentColor
//         }
//       });
  
//   const MainNavigator = createDrawerNavigator(
//     {
//       Booking:TabNavigator
//     },{
//         contentComponent: SideBar,
//         drawerBackgroundColor: '#fb9403',
//         contentOptions: {
//         activeBackgroundColor: 'black',
//         activeTintColor: 'white',
//         itemsContainerStyle: {
//           marginVertical: 0,
//         },
//         iconContainerStyle: {
//           opacity: 1,
//         },
//         },
//      });