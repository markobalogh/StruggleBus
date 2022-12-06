import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  

  
  export default function ContactList({ username, id, imageUrl, number }) {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: imageUrl}}/>
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
      flexDirection: 'column',
    },
    textSection: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      // fontWeight: 'bold',
      marginBottom: 10,
    },
    info: {
      alignItems: 'center',
      paddingHorizontal: 30,
    },
    image: {
      width: 120,
      height: 120,
      backgroundColor: 'red',
      resizeMode: 'contain'
    }
  });