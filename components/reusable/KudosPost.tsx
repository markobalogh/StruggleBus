// import ImagedCardView from "react-native-imaged-card-view";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Dimensions,
  } from 'react-native';
import { theme } from '../../theme';
import { fonts } from '../../typography';
  
export default function KudosPost({imageUrl, username, kudostext}) {

    return (
        <View style={styles.kudosPost}>
            <View style={styles.header}>
                <View style={styles.friendPic}>
                    <Image style={styles.image} source={imageUrl} />
                </View>
                <Text style={styles.headerFont}>From {username}</Text>
            </View>

            <View style={styles.headerLine}>
            </View>
                <Text style={styles.kudosText}> {kudostext} </Text>
        </View>
    );
  }



  const styles = StyleSheet.create({
    kudosPost: {
      width:Dimensions.get('window').height / 3,
      height: Dimensions.get('window').height / 6,
      borderRadius: Dimensions.get('window').height / 30,
      backgroundColor: theme.colors.background0, 
      marginHorizontal: theme.padding1,
      shadowOffset: {width:7, height: 5},
      shadowOpacity: 0.2,
      shadowRadius:5,
      shadowColor: 'black',
      marginBottom: '10%'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between'
    },
    friendPic: {
        width:theme.iconSize,
        height:theme.iconSize,
        borderRadius: 100,
        // backgroundColor: 'red',
        borderColor: theme.colors.action,
        // borderWidth: 2,     
        marginHorizontal:  Dimensions.get('window').height / 80, 
        marginVertical:  Dimensions.get('window').height / 90, 
        // resizeMode: 'contain',
    },
    headerLine: {
        width: Dimensions.get('window').width / 1.5,
        height: 0.4,
        backgroundColor:'black',
        alignSelf: 'center'
    },
    headerFont: {
        // font: fonts.header2,
        ...fonts.body,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
    },
    kudosText: {
        // textAlign: 'center',
        marginHorizontal: theme.padding0,
        marginTop: theme.padding0,
        // ...fonts.header3,
        color: 'black',
        ...fonts.handwriting,
        // justifyContent: 'flex-start'
    },
    image: {
        width:theme.iconSize,
        height:theme.iconSize,
        resizeMode: 'contain',
    },
});