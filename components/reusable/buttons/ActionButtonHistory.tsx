import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";

interface ActionButtonHistoryProps {
  onPress: () => void,
  title: string,
  style?:StyleProp<TextStyle>
}

export default function ActionButtonHistory({onPress,title,style}:ActionButtonHistoryProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[style,styles.topLevel]}>
      <Text style={[fonts.header3, styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    height: 40,
    width:180,
    maxHeight: 40,
    maxWidth:180,
    borderRadius: 10,
    backgroundColor: theme.colors.action,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // padding:theme.padding0,
  },
  title: {
    color:'white',
    textAlign:'center'
  }
})