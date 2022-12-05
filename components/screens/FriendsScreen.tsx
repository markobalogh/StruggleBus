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
import EmojiSelector from "../reusable/EmojiSelector";
import ActionButtonHistory from "../reusable/ActionButtonHistory";


export default function FriendsScreen({ navigation }:Props) {
    return (
        <SafeAreaView style={styles.topLevel}>
            <StruggleBusHeader></StruggleBusHeader>
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
})