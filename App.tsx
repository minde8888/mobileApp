import { StyleSheet, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import Navigate from './navigate/Navigate';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.screen} onLayout={onLayoutRootView}>
      <Navigate />
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
