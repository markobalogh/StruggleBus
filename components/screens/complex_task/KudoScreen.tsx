import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';
// import {Contact} from '.';
import { Props } from "../../../App";
import ContactList from '../../reusable/ContactList';
import { SafeAreaView } from "react-native-safe-area-context";
import StruggleBusHeader from "../../reusable/StruggleBusHeader";
import ActionButton from '../../reusable/buttons/ActionButton';


export default function KudoScreen({ navigation }:Props<"KudoScreen">) {

  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      {/* <ActionButton title="FAQ" onPress={()=>{navigation.navigate('FAQScreen')}}></ActionButton> */}
    </SafeAreaView>   
  )
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  topLevel: {
    flex:1,
    // paddingHorizontal: 30,
    backgroundColor: 'pink',
    flexDirection: 'column',
    // backgroundColor:theme.colors.background0
  },
})

