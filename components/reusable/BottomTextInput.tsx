import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, Dimensions } from "react-native";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import { Ionicons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

interface BottomTextInputProps {
  onPress: () => void,
  title: string,
  style?:StyleProp<TextStyle>
}

export default function BottomTextInput({onPress,title,style}:BottomTextInputProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[style,styles.container]}>
      
      
      <Ionicons name="happy-outline" size={22} color="black" /> 
      <Text style={[fonts.header4, styles.title]}>Write a message</Text>
      <Ionicons name="attach-outline" size={22} color="black" /> 

    </TouchableOpacity>
  
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: 0,
    width: windowWidth * 0.95,
    height: windowHeight * 0.08,
    paddingHorizontal: theme.padding0,
    // margin: 30,
  },
  title: {
    color:'white',
    justifyContent: "flex-end",
  }
})