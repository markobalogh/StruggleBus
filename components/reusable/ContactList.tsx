import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    TouchableOpacity,
  } from 'react-native';
import { theme } from '../../theme';
import { fonts } from '../../typography';  

  
  export default function ContactList({ username, id, imageUrl, number }) {
    return (
      <TouchableOpacity style={styles.item}>

        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageUrl}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{username}</Text>
        </View>  
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      paddingHorizontal: 30,
      paddingBottom: 30,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    textSection: {
      flex: 1,
    },
    name: {
      marginBottom: 10,
      ...fonts.bodyContact,      
    },
    info: {
      alignItems: 'center',
      paddingHorizontal: 20,
      flexDirection: 'column',
      // textAlign: 'center',
    },
    image: {
      resizeMode: 'contain',
      width: 60,
      height: 60,
      top:'20%'
    }, 
    imageContainer: {
      borderRadius: 100,
      overflow:'hidden',
      width: 60,
      height: 60,
      alignContent: 'center',
      backgroundColor: theme.colors.background2,
    }
  });