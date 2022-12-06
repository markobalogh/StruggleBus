import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Props } from "../../App";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "../reusable/StruggleBusHeader";
import ActionButtonHistory from "../reusable/ActionButtonHistory";
import PeriodFilterButton from "../reusable/PeriodFilterButton";
import { useState } from "react";



const periodFilter = [
  { status:'This week' },
  { status:'This month' },
  { status:'This year' }
]


const moods = [
  {
    mood: 'calm',
    status: 'This week'
  },
  {
    mood: 'relaxed',
    status: 'This month'
  },
  {
    mood: 'serene',
    status: 'This year'
  },
]


export default function History({ navigation }:Props) {

  const [status, setStatus] = useState()
  const [datalist, setDatalist] = useState(moods)

  const setStatusFilter = status => {

    setDatalist([...moods.filter(period => period.status === status)])
    setStatus(status)
    // console.log(status)
  }

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text>{item.mood}</Text>
        <Text>{item.status}</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      <View style={styles.kudosMoodContainer}>
        <ActionButtonHistory onPress={()=>{}} title="Kudos"></ActionButtonHistory>
        <ActionButtonHistory onPress={()=>{}} title="Mood"></ActionButtonHistory> 
      </View>

      <View style={styles.kudosMoodContainer}>
        {
          periodFilter.map(period => (
            <View>
              <PeriodFilterButton onPress={()=>{setStatusFilter(period.status)}} title={period.status}></PeriodFilterButton>
            </View>
          ))
        }
      </View>

      <FlatList
        data={datalist}
        keyExtractor={(period, i) => i.toString()}
        renderItem={renderItem}
      />

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