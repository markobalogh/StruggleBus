import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";

interface ActionButtonProps {
  onPress: () => void,
  title: string,
  style?: StyleProp<TextStyle>
  textStyle?: StyleProp<TextStyle>
}

export default function ActionButton({onPress,title,style,textStyle}:ActionButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.topLevel,style]}>
      <Text style={[fonts.header2, styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    height: 70,
    width:200,
    maxHeight: 70,
    maxWidth:200,
    borderRadius: 35,
    backgroundColor: theme.colors.action,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:theme.padding0,
  },
  title: {
    color:'white',
  }
})