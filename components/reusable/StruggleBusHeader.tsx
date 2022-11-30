import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Props } from "../../App";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import { useNavigation } from '@react-navigation/native';


export default function StruggleBusHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.topLevel}>
      <View style={styles.secondLevel}>
        <TouchableOpacity style={styles.bus} onPress={()=>navigation.navigate("Home")}>
          <Image style={styles.bus} resizeMode="contain" source={require("./../../assets/images/bus.png")}></Image>
        </TouchableOpacity>
        <Text style={fonts.header}>Struggle Bus</Text>
        <View style={styles.placeholder}></View>
      </View>
      <View style={styles.margin}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flexDirection: 'column',
    height: 108,
    alignItems:'stretch',
  },
  secondLevel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 96,
    backgroundColor:theme.colors.background0,
    padding:theme.padding1
  },
  placeholder: {
    height: 50,
    width: 50
  },
  bus: {
    height: 50,
    width: 50,
  },
  margin: {
    height: theme.padding0,
    backgroundColor:theme.colors.background1,
  }
})