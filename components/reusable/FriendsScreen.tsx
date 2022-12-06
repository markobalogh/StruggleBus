import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView, Pressable } from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import StruggleBusHeader from "./StruggleBusHeader";
import { NavigationProp } from '@react-navigation/native'
import { Props } from "../../App";
import ActionButton from "./ActionButton";
import BottomTextInput from "./BottomTextInput";
import EmojiSelector from "./EmojiSelector";
import ActionButtonHistory from "./ActionButtonHistory";
import FriendProfile from "./FriendProfile";


const groceryListData = [
    {
        id: '1',
        username: 'George',
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '2',
        username: 'Hannah',
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '3',
        username: 'Roy',
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '4',
        username: 'Jenny',
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '5',
        username: 'Alice',
        imageUrl: './assets/images/companions/cat.png',
    },
    {
        id: '6',
        username: 'Aaron',
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
            <View>
                <FlatList
                    columnWrapperStyle={{justifyContent:'space-between'}}
                    horizontal={false}
                    numColumns={2}
                    data={groceryListData} // the array of data that the FlatList displays
                    renderItem={(item) => renderFriendProfile(item)}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}
    
//move friend scren back into reusable


const styles = StyleSheet.create({
    topLevel: {
        flex:1,
        flexDirection: 'column',
        backgroundColor:theme.colors.background0
    },
    item1: {
        backgroundColor: 'red',
    },
})