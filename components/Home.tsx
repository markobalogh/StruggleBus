import { Text, View } from "react-native";
import { fonts } from "../typography";

export default function Home() {
  return (
    <View>
      <Text style={fonts.header}>Welcome to StruggleBus!</Text>
    </View>
  )
}