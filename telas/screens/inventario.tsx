import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native"
import Inputt from "../components/input"
import Botao from "../components/botao";
import Header from "../components/header";
import { FontAwesome6 } from '@expo/vector-icons';

import { StatusBar } from "expo-status-bar";
import NavHeader from "../components/nav";

function PagInventario() {
    return (
        <View>
            <StatusBar style="dark" />
            <NavHeader name={"bars"} size={24} color={"black"}/>
    </View >
  )
}
const styles = StyleSheet.create({
    escrita: {
        color: "#ffffff"
    },
    textinh: {
        marginTop: 50,
        alignSelf: "center",
        fontWeight: "500",
        fontSize: 16,
        maxWidth: 230,
        textAlign: "center"
    }
})
export default PagInventario