import { MaterialTopTabNavigationHelpers } from "@react-navigation/material-top-tabs/lib/typescript/src/types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import { Image, ImageBackground, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";
import ActionButton from "../../reusable/ActionButton";

export default function Username() {

  const navigation = useNavigation();

  const inputRef = useRef<TextInput>()

  useFocusEffect(React.useCallback(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 500)
  }, []));

  return (
    <SafeAreaView style={styles.topLevel}>
      <Image style={styles.bus} resizeMode="contain" source={require("./../../../assets/images/bus.png")}></Image>
      <Text style={[fonts.header, styles.headerText]}>What should we call you?</Text>
      <Text style={fonts.body}>This is the name that will be displayed to your friends when you aren't in ghost mode.</Text>
      <KeyboardAvoidingView style={styles.notebook} contentContainerStyle={styles.notebook} behavior="padding">
        <Pressable style={styles.notebook} onPress={()=>inputRef.current.focus()}>
          <ImageBackground style={styles.notebook} resizeMode="contain" source={require("./../../../assets/images/notebookCover.png")}>
            <TextInput ref={inputRef} style={styles.nameInput} returnKeyType="done"></TextInput>
          </ImageBackground>
        </Pressable>
      </KeyboardAvoidingView>

      <ActionButton title="Confirm" onPress={() =>navigation.navigate("Home")} style={[styles.confirmButton]}></ActionButton>
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
    backgroundColor: theme.colors.background0,
    // backgroundColor:'red'
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
  },
  notebook: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  nameInput: {
    ...fonts.handwriting,
    fontSize:30,
    textAlign:'center'
  }
})