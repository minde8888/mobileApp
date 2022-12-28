import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import Navigate from './navigate/Navigate';

SplashScreen.preventAutoHideAsync();

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <Navigate />
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
