import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Props } from "../../../App";
import { theme } from "../../../theme";
import { fonts } from "../../../typography";
import StruggleBusHeader from "../../reusable/StruggleBusHeader";
import ActionButtonHistory from "../../reusable/buttons/ActionButtonHistory";
import PeriodFilterButton from "../../reusable/buttons/PeriodFilterButton";
import { useState } from "react";
import FriendProfileHistory from "../../reusable/FriendProfileHistory";
import { idText } from "typescript";



const periodFilter = [
  { status:'This week' },
  { status:'This month' },
  { status:'This year' }
]


const friendData = [
  {
      id: '1',
      username: 'George',
      // imageUrl: require('./assets/images/companions/cat.png'),
      imageUrl: require('./../../../assets/images/companions/SB_cat.png'),
      stopLightColor:'red',
      status: 'This week',
      reachedOut: 'you'
  },
  {
      id: '2',
      username: 'Hannah',
      // imageUrl: require('./assets/images/companions/cat.png'),
      imageUrl: require('./../../../assets/images/companions/SB_panda.png'),
      stopLightColor:'red',
      status: 'This month',
      reachedOut: 'you'
  },
  {
      id: '3',
      username: 'Roy',
      // imageUrl: require('./assets/images/companions/cat.png'),
      imageUrl: require('./../../../assets/images/companions/SB_bird.png'),
      stopLightColor:'yellow',
      status: 'This week',
      reachedOut: 'you'

  },
  {
      id: '4',
      username: 'Jenny',
      // imageUrl: require('./assets/images/companions/cat.png'),
      imageUrl: require('./../../../assets/images/companions/SB_bunny.png'),
      stopLightColor:'yellow',
      status: 'This month',
      reachedOut: 'them'
  },
  {
      id: '5',
      username: 'Alice',
      // imageUrl: require('./assets/images/companions/cat.png'),
      imageUrl: require('./../../../assets/images/companions/SB_panda.png'),
      stopLightColor:'yellow',
      status: 'This month',
      reachedOut: 'them'
  },
  {
      id: '6',
      username: 'Aaron',
      // imageUrl: require('./assets/images/companions/cat.png'),
      imageUrl: require('./../../../assets/images/companions/SB_dog_white.png'),
      stopLightColor:'green',
      status: 'This year',
      reachedOut: 'them'
      
  },
  {
      id: '7',
      username: 'Maurice',
      imageUrl: require('./../../../assets/images/companions/SB_cat.png'),
      stopLightColor:'green',
      status: 'This week',
      reachedOut: 'them'
  },
  {
      id: '8',
      username: 'Jane',
      imageUrl: require('./../../../assets/images/companions/SB_panda.png'),
      stopLightColor:'green',
      status: 'This year',
      reachedOut: 'them'
  }
];

export default function History({ navigation, route }:Props<"History">) {

  const [status, setStatus] = useState("This week")
  const [reachedOut, setReachedOut] = useState([...friendData.filter(period => period.status === status && period.reachedOut === "them")]) //here we filter the list for initial rendering
  const [datalist, setDatalist] = useState([...friendData.filter(period => period.status === status && period.reachedOut === "you")])

  

  const setStatusFilter = status => {

    setDatalist([...friendData.filter(period => period.status === status && period.reachedOut === "them")])
    setReachedOut([...friendData.filter(period => period.status === status && period.reachedOut === "you")])
    setStatus(status)
    // console.log(status)
  }

  const renderFriendProfileHistory = ({ item, index }) => {
    return (
        <FriendProfileHistory
            username={item.username}
            id={item.id}
            imageUrl={item.imageUrl}
            showUsername={true}
            tappable={true}
            marginBottom={20}
             />
        );
}

  return (
    <SafeAreaView style={styles.topLevel} edges={["left", "right", "top"]}>
      <StruggleBusHeader></StruggleBusHeader>
      <View style={styles.kudosMoodContainer}>
        <ActionButtonHistory onPress={()=>{navigation.navigate('KudoScreen')}} title="Kudos"></ActionButtonHistory>
        <ActionButtonHistory onPress={()=>{navigation.navigate('MoodScreen')}} title="Mood"></ActionButtonHistory> 
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

      <Text style={styles.reachedOutText}>Who reached out to you:</Text>

      <FlatList
        columnWrapperStyle={{justifyContent:'space-around'}}
        horizontal={false}
        numColumns={2}
        data={datalist}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderFriendProfileHistory(item)}
      />


      <Text style={styles.reachedOutText}>Who you reached out to:</Text>
      <FlatList
        columnWrapperStyle={{justifyContent:'space-around'}}
        horizontal={false}
        numColumns={2}
        data={reachedOut}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderFriendProfileHistory(item)}
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
  reachedOutText: {
    fontSize:24,
    fontWeight:"bold",
    padding: theme.padding0
}
});