import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { Props } from "../../App";
import { fonts } from "../../typography";

export interface AvatarProps {
  companion: 'bird' | 'boydog' | 'cat' | 'girldog' | 'panda';
  stoplightColor: 'red' | 'yellow' | 'green';
  style: StyleProp<ViewStyle>;
  name: string;
}

export default function Avatar(props:AvatarProps) {
  return (
    <View style={styles.topLevel}>
      <Text style={fonts.body}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    // flex: 1,
    alignSelf:'flex-start',
    backgroundColor: 'red',
    height: 200,
    width: 200,
    flexDirection: 'column',

  }
})