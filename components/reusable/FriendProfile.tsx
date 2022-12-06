import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  
  export default function FriendProfile({ username, id, imageUrl }) {
    return (
      <View style={styles.item}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri:imageUrl}}/>
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
      flexDirection: 'row',
    },
    image: {
      backgroundColor: 'red',
      resizeMode: 'contain'
    },
    imageContainer: {
      borderRadius: 100,
      width: 120,
      height: 120,
      backgroundColor: 'red',
    },
  });