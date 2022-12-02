
import { useState } from "react";
import { Image, Alert, Modal, StyleSheet, Text, TouchableOpacity, Pressable, View } from "react-native";
import { theme } from "../../theme";
import { fonts } from "../../typography";
import { Props } from "../../App";


export default function TypeCheckInModal({ navigation }:Props) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
        <Modal
            animationType="slide"
            presentationStyle="overFullScreen"
            // transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
            <View style={styles.companionContainer}>
              <Image style={styles.companion} resizeMode="contain" source={require("./../../assets/images/notebook.png")}></Image>
            </View>
            </View>
        </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    //   marginTop: 22,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
      backfaceVisibility: 'visible',

    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      // shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    companion: {
      height: '100%',
      width:'100%',
    },
    companionContainer: {
      aspectRatio:1,
      backgroundColor: 'red',
      alignSelf:'stretch',
      alignItems: 'center',
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
  