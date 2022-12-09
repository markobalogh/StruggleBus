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


export default function KudoScreen({ navigation, route }:Props<"KudoScreen">) {

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
    };


    const renderTodo = ({ item }) => {
      // STEP 2: render a ToDo component with the text prop set to item -- check out ToDo.js if you'd like to see how this component is coded up
      return <KudosPost 
              username={'Abena'} id='1' imageUrl={require("./../../../assets/images/notebookCover.png")} kudostext={item.text}/>;
    };


    let contentDisplayed;
  
    if (true) {
      contentDisplayed = 
      <View>

        <View style={styles.iconContainer}>
            <Image style={styles.icon} resizeMode="contain" source={require("./../../../assets/images/friends_icon.png")}></Image>
        </View>
        

        <FlatList
          data={todos} // STEP 3: set our data for the FlatList as the todos state variable we created earlier
          renderItem={renderTodo}
          keyExtractor={(item, index) => item + index}
        />

        <KeyboardAvoidingView contentContainerStyle={styles.notebook}>
          <Dialog.Container 
                visible={visible} 
                onBackdropPress={noDialog}
                >
                <Dialog.Title>'To' + username</Dialog.Title>
                <Dialog.Description>
                Send a quick 'thank you' message to + username
                </Dialog.Description>
                <ImageBackground style={styles.notebook} resizeMode="contain" source={require("./../../../assets/images/notebookCover.png")}>
                    <Dialog.Input onChangeText={(newText) => setText(newText)}
                          value={text} style={styles.nameInput} multiline={true} returnKeyType="done">
                    </Dialog.Input>
              </ImageBackground>
            </Dialog.Container>
        </KeyboardAvoidingView>

    </View>
     
    } else{
      contentDisplayed = <View style={styles.list}></View>
    }


  return (
    <SafeAreaView style={styles.topLevel}>
      <StruggleBusHeader></StruggleBusHeader>
      
      {contentDisplayed}

      {/* <Text style={[ fonts.header2]}>random text</Text> */}

    </SafeAreaView>   
  )
}


const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: 'pink'
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
    textAlign:'center'
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
})

