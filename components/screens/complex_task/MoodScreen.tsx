import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Props } from "../../../App";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";
import StruggleBusHeader from "../../reusable/StruggleBusHeader";
import ActionButtonHistory from "../../reusable/buttons/ActionButtonHistory";
import PeriodFilterButton from "../../reusable/buttons/PeriodFilterButton";
import { useState } from "react";



const periodFilter = [
  { status:'This week' },
  { status:'This month' },
  { status:'This year' }
]


const moods = [
  {
    mood: 'calm',
    status: 'This week',
    radius: Dimensions.get('window').height / 3,
    color: theme.colors.notselected
  },
  {
    mood: 'relaxed',
    status: 'This month',
    radius: Dimensions.get('window').height / 4,
    color: theme.colors.action
  },
  {
    mood: 'serene',
    status: 'This year',
    radius: Dimensions.get('window').height / 3,
    color: theme.colors.mood1,
  },
]


export default function MoodScreen({ navigation }:Props<"MoodScreen">) {

  const [status, setStatus] = useState('This week')
  const [datalist, setDatalist] = useState([...moods.filter(period => period.status === status)])

  const setStatusFilter = status => {

    setDatalist([...moods.filter(period => period.status === status)])
    setStatus(status)
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={{justifyContent: 'space-around'}}>
        <View style={{backgroundColor: item.color, 
                      borderRadius: item.radius / 2, 
                      borderWidth: 2,
                      borderColor: theme.colors.notselected,
                      shadowOffset: {width:5, height: 5},
                      shadowOpacity: 0.3,
                      shadowRadius:10,
                      shadowColor: 'black',
                      width: item.radius, 
                      height: item.radius, 
                      alignItems: 'center', 
                      alignSelf: 'center',
                      marginTop: '25%',
                      flexDirection: 'row', 
                      justifyContent:'center',
                    }}>
          <Text style={[fonts.handwriting, styles.moodText]}>{item.mood}</Text>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      
      <View style={styles.kudosMoodContainer}>
        {
          periodFilter.map(period => (
            <View>
              <PeriodFilterButton onPress={()=>{setStatusFilter(period.status)}} title={period.status}></PeriodFilterButton>
            </View>
          ))
        }
      </View>

      <Text style={styles.reachedOutText}>Abena's mood:</Text>


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
  moodText: {
    fontSize: 56,
    fontWeight: "bold",
  },
  reachedOutText: {
    fontSize:36,
    fontWeight:"bold",
    padding: theme.padding0,
    textAlign: 'center',
},
});