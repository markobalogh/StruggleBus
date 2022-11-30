import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { fonts } from "../../typography";

interface ActionButtonProps {
  onPress: () => void,
  title: string,
  style?:StyleProp<TextStyle>
}

export default function ActionButton({onPress,title,style}:ActionButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[style,styles.topLevel]}>
      <Text style={[fonts.header2, styles.title]}>{title}</Text>
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