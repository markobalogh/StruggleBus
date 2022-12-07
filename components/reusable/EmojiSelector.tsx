import { useState } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

export default function EmojiSelector({ style, onSelect }:{style:StyleProp<ViewStyle>, onSelect:()=>void}) {

  const [selectedIndex, setSelectedIndex] = useState(null);

  const emojis = ['😊', '🙂', '😐', '😕', '☹️'];

  return (
    <View style={[style, styles.topLevel]}>
      {
        emojis.map((emoji, i) => {
          if (i === selectedIndex) {
            return (
              <Pressable key={i} onPress={() => { setSelectedIndex(i); onSelect()}}>
                <Text style={styles.emoji} key={i}>{emoji}</Text>
              </Pressable>
            )
          } else {
            return (
              <Pressable key={i} onPress={() => { setSelectedIndex(i); onSelect()}}>
                <Text style={[styles.emoji, {opacity:0.5}]} key={i}>{emoji}</Text>
              </Pressable>
            )          }
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  emoji: {
    fontSize:40,
  }
})