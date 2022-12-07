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
  
export default function FriendProfile({ username, id, imageUrl, showUsername, tappable }) {
    
  const navigation = useNavigation();

    return (
      <Pressable style={styles.item} onPress={() => { if (tappable) navigation.navigate("Chat", {username,id,imageUrl}) }}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUrl}/>
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
      alignItems:'center'
    },
    textSection: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      // fontWeight: 'bold',
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
  });