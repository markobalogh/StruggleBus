import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import { fonts } from "../../typography";
import FriendProfile from "../reusable/FriendProfile";
import { IMessage, GiftedChat, Bubble } from 'react-native-gifted-chat'
import { theme } from "../../theme";

const initialMessageSet: IMessage[] = [
  {
    _id: 1,
    text: 'Heyo how you been?',
    createdAt: new Date(),
    user: {
      _id: 1,
    }
  },
  {
    _id: 2,
    text: 'in a bit of a rough patch',
    createdAt: new Date(),
    user: {
      _id: 2,
    }
  }
]

export default function ChatScreen() {

  const [messages, setMessages] = useState<IMessage[]>(initialMessageSet);

  const navigation = useNavigation();
  const route:RouteProp<RootStackParamList,"Chat"> = useRoute();

  return (
    <SafeAreaView style={styles.topLevel} edges={['top']}>
      <View style={styles.header}>
        <FriendProfile id={1} imageUrl={route.params.imageUrl} tappable={false} username={route.params.username} showUsername={false}></FriendProfile>
        <View style={styles.headerNameContainer}>
          <Text style={[ fonts.header2]}>{route.params.username}</Text>
          <Text style={[fonts.body, {fontSize:12, lineHeight:12}]}>online</Text>
        </View>
      </View>
      <View style={styles.chatContainer}>
        <GiftedChat messages={messages} user={{
          _id: 1,
        }}
          bottomOffset={32}
          alignTop={false}
          inverted={false}
          onSend={(newMessage => setMessages([...messages, ...newMessage]))}
          renderMessageText={(message) => {
            return <Text style={styles.messageText}>{message.currentMessage.text}</Text>
          }}
          timeTextStyle={{ left: { color: 'black' }, right:{color:'black'} }}
          renderBubble={props => {
            return (
              <Bubble
                {...props}
                wrapperStyle={{
                  right: {
                    backgroundColor: 'white',
                    marginTop: 10,
                    marginBottom:10,
                  },
                  left: {
                    backgroundColor: theme.colors.inboundMessages,
                    marginTop: 10,
                    marginBottom: 10,
                    marginLeft:0,
                  }
                }}
              />
            );
          }}
        ></GiftedChat>
      </View>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  topLevel: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  header: {
    height: 150,
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
  headerNameContainer: {
    flex:2,
    flexDirection: 'column',
    // backgroundColor:'green',
  },
  chatContainer: {
    flex: 1,
    backgroundColor: theme.colors.background2,
  },
  messageText: {
    ...fonts.body,
    fontSize:16,
    paddingLeft: 10,
    paddingRight: 10,
    letterSpacing: 0,
    textAlign: 'center'
  }
})