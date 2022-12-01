import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";
import { theme } from "../../theme";
import { fonts } from "../../typography";

interface PeriodFilterButtonProps {
  onPress: () => void,
  title: string,
  style?:StyleProp<TextStyle>
//   isSelected bool -> state
// update  IS SELECETD VAR on preSS 
}

export default function PeriodFilterButton({onPress,title,style}:PeriodFilterButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[style,styles.topLevel]}>
        {/* style={[style,styles.topLevel, { backgroundcolor : isSelected ? selectedcolor : notselectedcolor}]} */}
      <Text style={[fonts.header4, styles.title]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    height: 20,
    width:120,
    maxHeight: 20,
    maxWidth:120,
    borderRadius: 10,
    backgroundColor: theme.colors.notselected,
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