import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Props } from "../../App";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "../reusable/StruggleBusHeader";
import ActionButtonHistory from "../reusable/ActionButtonHistory";
import PeriodFilterButton from "../reusable/PeriodFilterButton";

export default function History({ navigation }:Props) {
  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      <View style={styles.kudosMoodContainer}>
        <ActionButtonHistory onPress={()=>{}} title="Kudos"></ActionButtonHistory>
        <ActionButtonHistory onPress={()=>{}} title="Mood"></ActionButtonHistory> 
      </View>
      <View style={styles.kudosMoodContainer}>
        <PeriodFilterButton onPress={()=>{}} title="This week"></PeriodFilterButton>
        <PeriodFilterButton onPress={()=>{}} title="This month"></PeriodFilterButton> 
        <PeriodFilterButton onPress={()=>{}} title="This year"></PeriodFilterButton> 
      </View>

      
      {/* <ActionButton onPress={()=>{}} title="Check In"></ActionButton> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor:theme.colors.background0
  },
  kudosMoodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.padding0,
  },
});