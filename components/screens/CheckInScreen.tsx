import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView, Pressable } from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "../reusable/StruggleBusHeader";
import { NavigationProp } from '@react-navigation/native'
import { Props } from "../../App";
import ActionButton from "../reusable/ActionButton";
import BottomTextInput from "../reusable/BottomTextInput";


export default function CheckInScreen({ navigation }:Props) {
  const [value, onChangeText] = useState('');

  const textInputRef = useRef<TextInput>();

  return (
    <SafeAreaView style={styles.topLevel}>
      <Pressable style={styles.fullSize} onPress={()=>{textInputRef.current.blur()}}>
        <KeyboardAvoidingView style={styles.kbav} behavior="position" contentContainerStyle={styles.kbav}>
          <View style={styles.centerContainer}>
            <View style={styles.companionContainer}>
              <Image style={styles.fullSize} resizeMode="contain" source={require("./../../assets/images/companions/cat_circle.png")}></Image>
            </View>
            <Text style={fonts.header}>What's going on today?</Text>
            <View style={[styles.companionContainer, { aspectRatio: 770 / 462 }]}>
              <Pressable style={styles.fullSize} onPress={()=>{textInputRef.current.focus()}}>
                <ImageBackground style={[styles.fullSize, styles.notebook]} resizeMode="stretch" source={require("./../../assets/images/notebook.png")}>
                  <TextInput style={[styles.notebookText, fonts.handwriting]}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    keyboardType="default"
                    multiline={true}
                    scrollEnabled={true}
                    ref={textInputRef}
                  />
                </ImageBackground>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
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
  kbav: {
    flex: 1,
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
    // backgroundColor:'green',
  },
  icon: {
    height: theme.iconSize,
    width: theme.iconSize,
    marginBottom:theme.padding1
  },
  companionContainer: {
    aspectRatio:1,
    alignSelf:'stretch',
    // backgroundColor:'yellow',
  },
  notebook: {
    // backgroundColor: 'blue',
    aspectRatio: 770 / 462,
    maxWidth:'100%',
  },
  fullSize: {
    height: '100%',
    width:'100%',
  },
  notebookText: {
    // backgroundColor: 'red',
    width: '60%',
    left: '29%',
    top: '6%',
    lineHeight:25,
  }
})