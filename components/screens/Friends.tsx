import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Props } from "../../App";
import { theme } from "../../theme";
import Avatar from "../reusable/Avatar";
import StruggleBusHeader from "../reusable/StruggleBusHeader";

export default function Friends({ navigation }:Props) {
  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      <View style={styles.mainContent}>
        <Avatar name="George" companion="girldog" stoplightColor="red" style={{height:200,width:200}}></Avatar>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor:theme.colors.background0
  },
  mainContent: {
    flex: 1,
    backgroundColor: theme.colors.background0,
    padding: theme.padding1,
    flexDirection: 'row',
    alignItems:'stretch',
  },
})