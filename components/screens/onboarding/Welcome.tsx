import { MaterialTopTabNavigationHelpers } from "@react-navigation/material-top-tabs/lib/typescript/src/types";
import { TabNavigationState, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";

export default function Welcome() {

  const [transitioned, setTransitioned] = useState(false);

  const navigation:MaterialTopTabNavigationHelpers = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setTransitioned(true);
      setTimeout(() => {
        navigation.jumpTo("ChooseCompanion")
      }, 3000)
    }, 3000);
  }, [])

  return (
    <SafeAreaView style={styles.topLevel}>
      <Image style={styles.bus} resizeMode="contain" source={require("./../../../assets/images/bus.png")}></Image>
      {
        transitioned ? 
          <View>
            <Text style={[fonts.header, styles.mainText]}>Welcome to</Text>
            <Text style={[fonts.header, styles.mainText]}>Struggle Bus!</Text>
          </View>
         : 
          <View>
            <Text style={[fonts.header, styles.mainText]}>Want to be heard?</Text>
            <Text style={[fonts.header, styles.mainText]}>Hop on board!</Text>
          </View>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:theme.colors.background0
  },
  bus: {
    aspectRatio: 1,
    height: '20%',
    margin:20,
    // backgroundColor: 'green',
    // aspectRatio:1
  },
  mainText: {
    textAlign: 'center',
  }
})