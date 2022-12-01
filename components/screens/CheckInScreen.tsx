import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "../reusable/StruggleBusHeader";
import { NavigationProp } from '@react-navigation/native'
import { Props } from "../../App";
import ActionButton from "../reusable/ActionButton";
import BottomTextInput from "../reusable/BottomTextInput";


export default function CheckInScreen({ navigation }:Props) {
  return (
    <SafeAreaView style={styles.topLevel}>
      <View style={styles.mainContent}>
        <View style={styles.centerContainer}>

          <View style={styles.companionContainer}>
            <Image style={styles.companion1} resizeMode="contain" source={require("./../../assets/images/companions/cat_circle.png")}></Image>
          </View>

          <Text style={fonts.header}>What's going on today?</Text>
          <View style={styles.companionContainer}>
            <Image style={styles.companion} resizeMode="contain" source={require("./../../assets/images/notebook.png")}></Image>
          </View>

          <BottomTextInput onPress={()=>{navigation.navigate("TypeCheckInModal")}} title=""></BottomTextInput>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor:theme.colors.background0
  },
  mainContent: {
    flex: 1,
    backgroundColor: theme.colors.background0,
    padding: theme.padding1,
    flexDirection: 'row',
    alignItems:'stretch',
  },
  leftIconContainer: {
    flexDirection: 'column',
    width:theme.iconSize,
  },
  rightIconContainer: {
    flexDirection: 'column',
    width:theme.iconSize,
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'space-evenly',
    padding: theme.padding1,
  },
  icon: {
    height: theme.iconSize,
    width: theme.iconSize,
    marginBottom:theme.padding1
  },
  companionContainer: {
    aspectRatio:1,
    alignSelf:'stretch',
    alignItems: 'center',
  },
  companion: {
    height: '100%',
    width:'100%',
  },
  companion1: {
    height: '90%',
    width:'90%',
  },
})