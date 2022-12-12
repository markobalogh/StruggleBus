import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Contacts from 'react-native-contacts';
// import {Contact} from '.';
import { Props } from "../../../App";
import ContactList from '../../reusable/ContactList';
import { SafeAreaView } from "react-native-safe-area-context";
import StruggleBusHeader from "../../reusable/StruggleBusHeader";
import ActionButton from '../../reusable/buttons/ActionButton';



const friendData = [
    {
        id: '1',
        username: 'Marko',
        imageUrl: require('./../../../assets/images/companions/SB_cat.png'),
        number: '6503829556'
    },
    {
        id: '2',
        username: 'Thanh',
        imageUrl: require('./../../../assets/images/companions/SB_bird.png'),
        number: '6503829556'
    },
    {
        id: '3',
        username: 'Michelle',
        imageUrl: require('./../../../assets/images/companions/SB_panda.png'),
        number: '6503829556'
    },
];



export default function ContactsScreen({ navigation }:Props<"ContactsScreen">) {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     Contacts.getAll().then(contacts => {
//       setContacts(contacts);
//     });
//   }, []);

  const renderContact = ({item, index}) => {
    return (
      <ContactList
          username={item.username}
          id={item.id}
          imageUrl={item.imageUrl}
          number={item.number} />
      );
  }

  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      <ActionButton title="FAQ" onPress={()=>{navigation.navigate('FAQScreen')}}></ActionButton>
      <FlatList
        data={friendData} 
        renderItem={(item) => renderContact(item)}
        keyExtractor={(item) => item.id}
      />
      
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
    flexDirection: 'column',
    // backgroundColor:theme.colors.background0
  },
})

