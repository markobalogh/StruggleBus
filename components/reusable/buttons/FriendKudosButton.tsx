import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from 'react';
import { theme } from "../../../theme";
import { fonts } from "../../../typography";

interface FriendKudosButtonProps {
  onPress: () => void,
  title: string,
  style?:StyleProp<TextStyle>,
  // isSelected: false
// update  IS SELECETD VAR on preSS 
}

export default function FriendKudosButton({onPress,title,style}:FriendKudosButtonProps) {

  // const [isSelected, setIsSelected] = useState(false);

  // onPress = () => {
  //   // 👇️ toggle
  //   setIsSelected(isSelected => !isSelected);
  // };


  return (
    <TouchableOpacity onPress={onPress} style={[style,styles.topLevel]}>
      {/* ,{backgroundColor: isSelected ? theme.colors.action : theme.colors.notselected} */}
      <Text style={[fonts.header4, styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    height: 28,
    width:110,
    maxHeight: 28,
    maxWidth:110,
    borderRadius: 15,
    backgroundColor: theme.colors.notselected,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'white',
    textAlign:'center'
  }
})