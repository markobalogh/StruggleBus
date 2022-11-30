import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "../reusable/StruggleBusHeader";
import { NavigationProp } from '@react-navigation/native'
import { Props } from "../../App";
import ActionButton from "../reusable/ActionButton";


export default function Home({ navigation }:Props) {
  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      <View style={styles.mainContent}>
        <View style={styles.leftIconContainer}>
          <TouchableOpacity onPress={()=>{console.log("Will navigate to settings")}} style={styles.icon}>
            <Image style={styles.icon} resizeMode="contain" source={require("./../../assets/images/settings_icon.png")}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.companionContainer}>
            <Image style={styles.companion} resizeMode="contain" source={require("./../../assets/images/companions/cat_circle.png")}></Image>
          </View>
          <Text style={fonts.header}>Hi, Abena 👑 </Text>
          <Text style={[fonts.body, {textAlign:'center'}]}>Check in with your virtual companion to write down your struggles</Text>
          <ActionButton onPress={()=>{}} title="Check In"></ActionButton>
        </View>
        <View style={styles.rightIconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Image style={styles.icon} resizeMode="contain" source={require("./../../assets/images/friends_icon.png")}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image style={styles.icon} resizeMode="contain" source={require("./../../assets/images/history_icon.png")}></Image>
          </TouchableOpacity>
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
  },
  companion: {
    height: '100%',
    width:'100%',
  }
})