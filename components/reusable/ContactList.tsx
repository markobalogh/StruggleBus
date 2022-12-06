import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  

  
  export default function ContactList({ username, id, imageUrl, number }) {
    return (
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: imageUrl}}/>
        </View>
        
        <View style={styles.info}>
          <Text style={styles.name}>{username}</Text>
        </View>  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'blue',
      paddingHorizontal: 30,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
    },
    textSection: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      marginBottom: 10,
    },
    info: {
      alignItems: 'center',
      paddingHorizontal: 20,
      flexDirection: 'column',
    },
    image: {
      resizeMode: 'contain'
    }, 
    imageContainer: {
      borderRadius: 100,
      width: 60,
      height: 60,
      backgroundColor: 'red',
    }
  });