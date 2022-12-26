import { StyleSheet, SafeAreaView, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import { globalStyle } from './styles/globalStyle';
import * as Font from 'expo-font';
import React, { useState } from 'react';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-VariableFont_wght.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <SafeAreaView style={globalStyle.main}>
        <Text style={globalStyle.title}>Hello</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={(err) => console.log(err)} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
