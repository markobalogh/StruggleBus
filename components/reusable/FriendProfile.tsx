import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
  } from 'react-native';
import { theme } from '../../theme';
import { fonts } from '../../typography';
  
export default function FriendProfile({ username, id, imageUrl, showUsername, tappable, stopLightColor, marginBottom }) {
    
  const navigation = useNavigation();

    return (
      <Pressable style={[styles.item, { marginBottom } ]} onPress={() => { if (tappable) navigation.navigate("Chat", {username,id,imageUrl,stopLightColor}) }}>
        <View style={{width:120,height:120}}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={imageUrl} />
          </View>
          <View style={styles.statusContainer}>
            <View style={[styles.status, { backgroundColor: stopLightColor }]}></View>
          </View>
        </View>
        {
          showUsername ? 
            <View style={styles.info}>
              <Text style={[fonts.body, styles.name]}>{username}</Text>
            </View> 
          :
            null
        }
      </Pressable>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      // backgroundColor: 'blue',
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
      // fontWeight: 'bold',
      marginTop:10,
      marginBottom: 10,
      // backgroundColor:'green'
    },
    info: {
      alignItems: 'center',
      paddingHorizontal: 30,
      flexDirection: 'row',
      // backgroundColor:'blue'
    },
    image: {
      // backgroundColor: 'red',
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