import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  
  export default function FriendProfile({ username, id, imageUrl }) {
    return (
      <View style={styles.item}>
        <Text style={styles.name}>{username}</Text>
        <Image style={styles.image} source={{uri: imageUrl}}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: 'blue',
      paddingHorizontal: 30,
      flex: 1,
    },
    textSection: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    info: {
      fontSize: 16,
      color: 'black',
      borderWidth: 1,
      padding: 4,
    },
    image: {
      width: 120,
      height: 120,
      backgroundColor: 'red',
      resizeMode: 'contain'
    }
  });