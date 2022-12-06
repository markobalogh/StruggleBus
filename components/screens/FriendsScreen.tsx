import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView, Pressable } from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "../reusable/StruggleBusHeader";
import { NavigationProp } from '@react-navigation/native'
import { Props } from "../../App";
import ActionButton from "../reusable/ActionButton";
import BottomTextInput from "../reusable/BottomTextInput";
import EmojiSelector from "../reusable/EmojiSelector";
import PeriodFilterButton from "../reusable/PeriodFilterButton";
import FriendProfile from "../reusable/FriendProfile";


const friendData = [
    {
        id: '1',
        username: 'George',
        // imageUrl: require('./assets/images/companions/cat.png'),
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '2',
        username: 'Hannah',
        // imageUrl: require('./assets/images/companions/cat.png'),
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '3',
        username: 'Roy',
        // imageUrl: require('./assets/images/companions/cat.png'),
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '4',
        username: 'Jenny',
        // imageUrl: require('./assets/images/companions/cat.png'),
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '5',
        username: 'Alice',
        // imageUrl: require('./assets/images/companions/cat.png'),
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '6',
        username: 'Aaron',
        // imageUrl: require('./assets/images/companions/cat.png'),
        imageUrl: './assets/images/companions/cat.png',
    },
];


export default function FriendsScreen({ navigation }:Props) {
    const renderFriendProfile = ({ item, index }) => {
        return (
            <FriendProfile
                username={item.username}
                id={item.id}
                imageUrl={item.imageUrl} />
            );
    }

    return (
        <SafeAreaView style={styles.topLevel}>
            <StruggleBusHeader></StruggleBusHeader>
            <View style={styles.friendContainer}>
                <Text style={styles.name}>Friends</Text>
                <ActionButton title="Add Friend" onPress={()=>{navigation.navigate('ContactsScreen')}}></ActionButton>
            </View>
                <FlatList
                    columnWrapperStyle={{justifyContent:'space-around'}}
                    horizontal={false}
                    numColumns={2}
                    data={friendData} // the array of data that the FlatList displays
                    renderItem={(item) => renderFriendProfile(item)}
                    keyExtractor={(item) => item.id}
                />
        </SafeAreaView>
    )
}
    
//move friend scren back into reusable


const styles = StyleSheet.create({
    topLevel: {
        flex:1,
        // paddingHorizontal: 30,
        flexDirection: 'column',
        backgroundColor:theme.colors.background0
    },
    friendContainer: {
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    name: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})