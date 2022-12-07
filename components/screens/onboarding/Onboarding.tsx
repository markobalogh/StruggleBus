import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Welcome from "./Welcome";
import ChooseCompanion from "./ChooseCompanion";
import Username from "./Username";
import PhoneNumber from "./PhoneNumber";

const Tab = createMaterialTopTabNavigator();

export default function Onboarding() {
  return (
    <Tab.Navigator tabBar={()=>null}>
      <Tab.Screen name="Welcome" component={Welcome}></Tab.Screen>
      <Tab.Screen name="ChooseCompanion" component={ChooseCompanion}></Tab.Screen>
      <Tab.Screen name="PhoneNumber" component={PhoneNumber}></Tab.Screen>
      <Tab.Screen name="Username" component={Username}></Tab.Screen>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex: 1,
    backgroundColor:'red',
  }
})