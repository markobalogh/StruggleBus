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
import History from './components/screens/History';
import CheckInScreen from './components/screens/CheckInScreen';
import TypeCheckInModal from './components/screens/TypeCheckInModal';
import FriendsScreen, { FriendData } from './components/screens/FriendsScreen';
import ContactsScreen from './components/screens/ContactsScreen';
import FAQScreen from './components/screens/FAQScreen';
import ChatScreen from './components/screens/ChatScreen';


//Setup
//Create navigator
const Stack = createNativeStackNavigator();
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

//Set up type definitions for navigation
export type RootStackParamList = {
  Home: undefined;
  History: undefined;
  CheckInScreen: undefined;
  ContactsScreen: undefined;
  FriendsScreen: {reversed:boolean};
  FAQScreen: undefined;
  Chat: FriendData;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type Props<routeName extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, routeName>;

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
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='CheckInScreen' component={CheckInScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='FriendsScreen' component={FriendsScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='ContactsScreen' component={ContactsScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='FAQScreen' component={FAQScreen} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen  options={{ presentation: "transparentModal", headerShown: false }} name="TypeCheckInModal" component={TypeCheckInModal} ></Stack.Screen>
          <Stack.Screen name='History' component={History} options={{ headerShown: false }}></Stack.Screen>
          <Stack.Screen name='Chat' component={ChatScreen} options={{ headerShown: false }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
