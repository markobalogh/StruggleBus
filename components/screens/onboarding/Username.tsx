import { MaterialTopTabNavigationHelpers } from "@react-navigation/material-top-tabs/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";
import ActionButton from "../../reusable/ActionButton";

export default function Username() {

  const [selectedCompanion, setSelectedCompanion] = useState<number>(null);

  const navigation = useNavigation<MaterialTopTabNavigationHelpers>();

  const onConfirm = () => {
    if (selectedCompanion) {
      navigation.jumpTo()
    }
  }

  return (
    <SafeAreaView style={styles.topLevel}>
      <Image style={styles.bus} resizeMode="contain" source={require("./../../../assets/images/bus.png")}></Image>
      <Text style={[fonts.header, styles.headerText]}>Choose your companion</Text>
      <Text style={fonts.body}>Your virtual companion is here to help you process whatever challenges you may face.</Text>
      <View style={styles.companionSelector}>
        <View style={styles.topRow}>
          <Pressable style={styles.companionContainer} onPress={()=>setSelectedCompanion(1)}>
            <Image style={[styles.companion, selectedCompanion === 1 ? {opacity:1} : {opacity:0.5}]} resizeMode="contain" source={require("./../../../assets/images/companions/SB_cat.png")}></Image>
          </Pressable>
          <Pressable style={styles.companionContainer} onPress={()=>setSelectedCompanion(2)}>
            <Image style={[styles.companion, selectedCompanion === 2 ? {opacity:1} : {opacity:0.5}]} resizeMode="contain" source={require("./../../../assets/images/companions/SB_dog_white.png")}></Image>
          </Pressable>
          <Pressable style={styles.companionContainer} onPress={()=>setSelectedCompanion(3)}>
            <Image style={[styles.companion, selectedCompanion === 3 ? {opacity:1} : {opacity:0.5}]} resizeMode="contain" source={require("./../../../assets/images/companions/SB_bunny.png")}></Image>
          </Pressable>
        </View>
        <View style={styles.bottomRow}>
          <Pressable style={styles.companionContainer} onPress={()=>setSelectedCompanion(4)}>
            <Image style={[styles.companion, selectedCompanion === 4 ? {opacity:1} : {opacity:0.5}]} resizeMode="contain" source={require("./../../../assets/images/companions/SB_bird.png")}></Image>
          </Pressable>
          <Pressable style={styles.companionContainer} onPress={()=>setSelectedCompanion(5)}>
            <Image style={[styles.companion, selectedCompanion === 5 ? {opacity:1} : {opacity:0.5}]} resizeMode="contain" source={require("./../../../assets/images/companions/SB_panda.png")}></Image>
          </Pressable>
        </View>
      </View>
      <ActionButton title="Confirm" onPress={() => {}} style={[styles.confirmButton, selectedCompanion ? { opacity: 1 } : {opacity:0}]}></ActionButton>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex: 1,
    padding: theme.padding1 * 2,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background0
  },
  bus: {
    width: 70,
    height: 70,
    marginBottom: theme.padding1
  },
  headerText: {
    marginBottom: theme.padding1
  },
  companionSelector: {
    flex: 1,
    alignSelf: 'stretch',
    marginHorizontal: -1 * theme.padding1,
    flexDirection: "column",
    alignItems:'stretch',
  },
  topRow: {
    flex: 1,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems:'flex-end',
  },
  bottomRow: {
    flex: 1,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    marginTop:theme.padding1
  },
  companion: {
    height: '100%',
    width:'100%',
  },
  companionContainer: {
    // flex:1,
    width:'33%',
    aspectRatio: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems:'center'
  },
  confirmButton: {
    alignSelf: 'center',
  }
})