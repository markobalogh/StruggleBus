import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {loadAsync, useFonts } from 'expo-font';
import { fonts } from './typography';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from './components/screens/Home';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


//Setup
//Create navigator
const Stack = createNativeStackNavigator();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//Set up type definitions for navigation
type RootStackParamList = {
  Home: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Sans-ExtraBold': require('./assets/fonts/Nunito_Sans/NunitoSans-ExtraBold.ttf'),
    'Montserrat': require('./assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    'Comic-Neue': require('./assets/fonts/Comic_Neue/ComicNeue-Regular.ttf')
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
    <SafeAreaProvider>
      <NavigationContainer onReady={onLayoutRootView}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
