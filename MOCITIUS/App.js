import React, { useState } from 'react';
import  AppLoading  from 'expo-app-loading';
import * as Font from 'expo-font'

import AppNavigator from './navigation/AppNavigator';
const fetchFonts = () => {
  return Font.loadAsync({
    'poppins': require('./assets/fonts/Poppins-Light.ttf'),
    'roboto': require('./assets/fonts/Roboto-Light.ttf')
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={(err) => console.log(err)}
    />
    );
  }

  return (
    <AppNavigator/>
      
  );
}