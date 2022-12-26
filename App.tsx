import { StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import Navigate from './navigate/Navigate';
const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Black.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
})

SplashScreen.preventAutoHideAsync();

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
