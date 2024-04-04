import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Touchable } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NavHead from "@comp/nav";
import Itenss from "@comp/itens";
import Footer from "@comp/footer";
import BtnFlutua from "@comp/botFlutua";

function PagInventario() {
    return (
        <View style={styles.container}>
        <ScrollView>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
            <Itenss cod="956389" nome="CADEIRAS SENAI"/>
        </ScrollView >
        <BtnFlutua icone ={ <AntDesign name="pluscircle" size={60} color="#ff0000" />}></BtnFlutua>
        </View>
            
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
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