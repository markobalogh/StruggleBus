import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
  } from 'react-native';
import { theme } from '../../theme';
import { fonts } from '../../typography';
import FriendKudosButton from './buttons/FriendKudosButton';
  

export default function FriendProfileHistory({ username, id, imageUrl, showUsername, tappable, marginBottom }) {
    
  const navigation = useNavigation();

    return (
        //if (tappable) navigation.navigate("Chat", {username,id,imageUrl,stopLightColor}) 
    //   <Pressable style={[styles.item, { marginBottom } ]} onPress={() => {}}>
    <View style={[styles.item, { marginBottom } ]}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageUrl} />
          </View>
        {
          showUsername ? 
            <View style={styles.info}>
              <FriendKudosButton onPress={()=>{navigation.navigate("KudoScreen", {username,imageUrl, showDialog:true})}} title={username}/>
              {/* //pass in the boolean with the state */}
            </View> 
          :
            null
        }
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      paddingHorizontal: 30,
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    },
    textSection: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      marginTop:10,
      marginBottom: 10,
    },
    info: {
      alignItems: 'center',
      paddingHorizontal: 30,
      flexDirection: 'row',
    },
    image: {
      resizeMode: 'contain',
      height: '100%',
      width: '100%',
      top:'20%'
    },
    imageContainer: {
      borderRadius: 100,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: 120,
      height: 120,
      backgroundColor: theme.colors.background2,
      overflow:'hidden',
    },
    statusContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems:'center'
    },
    status: {
      position: 'relative',
      top: -41,
      right:-41,
      width: 20,
      height: 20,
      borderRadius:10,
    }
  });