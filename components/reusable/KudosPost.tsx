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
  
export default function KudosPost(props) {

    return (
        <View style={styles.kudosPost}>
            <View style={styles.header}>
                <View style={styles.friendPic}>
                    <Image style={styles.image} source={props.imageUrl} />
                </View>
                <Text style={styles.headerFont}>From {props.username}</Text>
            </View>

            <View style={styles.headerLine}>
            </View>
            <Text style={styles.kudosText}> {props.kudostext}</Text>
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
      shadowOffset: {width:5, height: 5},
      shadowOpacity: 0.2,
      shadowRadius:5,
      shadowColor: 'black',
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
        backgroundColor: 'red',     
        marginHorizontal:  Dimensions.get('window').height / 80, 
        marginVertical:  Dimensions.get('window').height / 75, 
    },
    headerLine: {
        width: Dimensions.get('window').width / 1.5,
        height: 1,
        backgroundColor:'black',
        alignSelf: 'center'
    },
    headerFont: {
        // font: fonts.header2,
        ...fonts.header3
         
    },
    kudosText: {
        // textAlign: 'center',
        marginHorizontal: theme.padding0,
        marginTop: theme.padding0,
        // justifyContent: 'flex-start'
    },
    image: {
        width:theme.iconSize,
        height:theme.iconSize,
    },
});