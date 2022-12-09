import React, {useEffect, useState, useRef} from 'react';
import { useFocusEffect } from "@react-navigation/native";
import {KeyboardAvoidingView, View, Text, Image, StyleSheet, TextInput, Platform, ImageBackground, FlatList} from 'react-native';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../../App";
import Contacts from 'react-native-contacts';
import { theme } from "../../../theme";
import { Props } from "../../../App";
import ContactList from '../../reusable/ContactList';
import { SafeAreaView } from "react-native-safe-area-context";
import StruggleBusHeader from "../../reusable/StruggleBusHeader";
import ActionButton from '../../reusable/buttons/ActionButton';
import { fonts } from "../../../typography";
import Dialog from "react-native-dialog";
import KudosPost from '../../reusable/KudosPost';
import { AutoGrowTextInput } from 'react-native-auto-grow-textinput';
import FriendKudosButton from '../../reusable/buttons/FriendKudosButton';


export default function KudoScreen({ navigation }:Props<"KudoScreen">) {

  const route:RouteProp<RootStackParamList,"KudoScreen"> = useRoute();

  const InitialText = "You're a gee,man!";
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");


    const addTodo = () => {
      let newTodos = [...todos];
      newTodos.push(text);
      setTodos(newTodos);
      setText("");
    };


    const [visible, setVisible] = useState(true);
    const showDialog = () => {
        setVisible(true);
    };
    const noDialog = () => {
        setVisible(false);
        addTodo();
    };


    const renderTodo = ({ item }) => {
      return <KudosPost 
              username={'Alice'} imageUrl={require("./../../../assets/images/companions/SB_panda.png")} kudostext={item.text}/>;
    };

    

    // let contentDisplayed;
    // if (true) {
    //   contentDisplayed = 
    // } else{
    //   contentDisplayed = <View style={styles.list}></View>
    // }


  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      
      <View>

        <View style={styles.iconContainer}>
            <Image style={styles.icon} resizeMode="contain" source={require("./../../../assets/images/friends_icon.png")}></Image>
        </View>
        
        <View>
        <KudosPost 
              username={'Roy'} imageUrl={require("./../../../assets/images/companions/SB_bunny.png")} kudostext={InitialText}/>
        </View>

        <FlatList
          data={todos} // STEP 3: set our data for the FlatList as the todos state variable we created earlier
          renderItem={renderTodo}
          keyExtractor={(item, index) => item + index}
        />

        <View style={styles.list}>
          <Dialog.Container 
                visible={visible} 
                onBackdropPress={noDialog}
                contentStyle={styles.list}
                >
                <Dialog.Title>To Roy</Dialog.Title>
                <Dialog.Description>
                Send a quick 'thank you' message to Roy
                </Dialog.Description>
                <AutoGrowTextInput onChangeText={(newText) => setText(newText)}
                          value={text} style={styles.nameInput} multiline={true} returnKeyType="done">
                </AutoGrowTextInput>
                <Dialog.Button label="Send Kudos" onPress={noDialog} />
            </Dialog.Container>
        </View>
        </View>
        <View style={styles.kudosButton}>
          <FriendKudosButton title="write kudos" onPress={navigation.goBack} />
        </View>

      

    </SafeAreaView>   
  )
}


const styles = StyleSheet.create({
  list: {
    // flex: 1,
    // backgroundColor: 'pink'
  },
  topLevel: {
    flex:1,
    flexDirection: 'column',
    backgroundColor:theme.colors.background0
  },
  icon: {
    height: 200,
    width: 200,
    marginBottom:theme.padding0,
  },
  iconContainer: {
    alignItems: 'center',
    // justifyContent: 'center'
    paddingTop: theme.padding0,
    paddingBottom: theme.padding0,
  },
  nameInput: {
    ...fonts.handwriting,
    fontSize:18,
    color: 'white',
    textAlign:'center',
    width: '90%',
  },
  notebook: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
  },
  textinput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  textinputrow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  kudosButton: {
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: '5%',
  },
})

