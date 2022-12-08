import { MaterialTopTabNavigationHelpers } from "@react-navigation/material-top-tabs/lib/typescript/src/types";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";
import ActionButton from "../../reusable/buttons/ActionButton";

const inputIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PhoneNumber() {

  const [activeInput, setActiveInput] = useState(0);

  const inputRefs = inputIndices.map(val => useRef<TextInput>());

  const navigation = useNavigation<MaterialTopTabNavigationHelpers>();

  const onConfirm = () => {
    if (activeInput === 10) {
      navigation.jumpTo("Username")
    }
  }

  const onInputChange = (text: string) => {
    if (text.length === 1) {
      //number entered into the textinput, move to the next one
      setActiveInput(activeInput + 1)
      if (activeInput === 9) {
        //last number entered; blur and show confirm button.
        inputRefs[activeInput].current.blur()
        //note that we can set activeInput to 10 because then none of them will be active, which is what we want after the final value is entered.
      }
    } else if(text.length === 0) {
      //number deleted, go back
      if (activeInput !== 0) {
        setActiveInput(activeInput - 1)
      }
    }
  }


  useFocusEffect(React.useCallback(() => {
    if (activeInput < 10) {
      if (activeInput === 0) {
        setTimeout(() => {
          inputRefs[activeInput].current.focus();
        }, 500) //needed in order to get the component to focus on the first input properly.
      } else {
        inputRefs[activeInput].current.focus();
      }
    }
  }, [activeInput]))

  return (
    <SafeAreaView style={styles.topLevel}>
      <Image style={styles.bus} resizeMode="contain" source={require("./../../../assets/images/bus.png")}></Image>
      <Text style={[fonts.header, styles.headerText]}>What's your phone number?</Text>
      <Text style={fonts.body}>This lets your friends add you. Don't worry, you can enable ghost mode to make your status invisible to your friends.</Text>
      <KeyboardAvoidingView style={styles.numberContainer} contentContainerStyle={styles.numberContainer} behavior="padding">
        {
          inputIndices.map((val, i) => {
            return (
              <Pressable onPress={()=>setActiveInput(val)} key={val} style={[styles.numberInputContainer, activeInput === val ? { shadowRadius: 8 } : { shadowRadius: 2 }]}>
                <TextInput caretHidden={true} onFocus={()=>setActiveInput(val)} ref={inputRefs[i]} style={styles.numberInput} keyboardType="phone-pad" onChangeText={(text)=>onInputChange(text)}></TextInput>
              </Pressable>
            )
          })
        }
      </KeyboardAvoidingView>
      <ActionButton title="Confirm" onPress={onConfirm} style={[styles.confirmButton, activeInput === 10 ? { opacity: 1 } : {opacity:0}]}></ActionButton>
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
  confirmButton: {
    alignSelf: 'center',
  },
  numberContainer: {
    // backgroundColor: 'red',
    alignSelf: 'stretch',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  numberInputContainer: {
    // backgroundColor: 'blue',
    width: '8%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:theme.colors.background0,
    borderColor:theme.colors.background0,
    shadowOpacity:0.7,
    shadowRadius: 2,
    shadowOffset: { height:0,width:0},
    shadowColor:theme.colors.action
  },
  numberInput: {
    ...fonts.header,
    height: '100%',
    width: '100%',
    textAlign: 'center',
    fontSize:'30%'
  }
})