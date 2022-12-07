import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import { fonts } from "../../typography";
import FriendProfile from "../reusable/FriendProfile";

export default function ChatScreen() {

  const navigation = useNavigation();
  const route:RouteProp<RootStackParamList,"Chat"> = useRoute();

  return (
    <SafeAreaView style={styles.topLevel}>
      <View style={styles.header}>
        <FriendProfile id={1} imageUrl={route.params.imageUrl} tappable={false} username={route.params.username} showUsername={false}></FriendProfile>
        <View style={styles.headerNameContainer}>
          <Text style={[ fonts.header2]}>{route.params.username}</Text>
          <Text style={[fonts.body, {fontSize:12, lineHeight:12}]}>online</Text>
        </View>
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
  }
})