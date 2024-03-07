import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Touchable } from "react-native"
import Inputt from "../components/input"
import Botao from "../components/botao";
import Header from "../components/header";
import { Entypo } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NavHead from "../components/nav";
import Itenss from "../components/itens";
import Footer from "../components/footer";
import BtnFlutua from "../components/botFlutua";

function PagInventario() {
    return (
        <View style={styles.container}>
            <NavHead color="#ffffff" icone={<Entypo name="menu" size={30} color="#595959" />} texto = "Lista" icone2={<EvilIcons name="search" size={30} color="#595959" />}></NavHead>
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
        <Footer color="#ff0000" corzinha="#ff0000" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="white" />} icone2 = {<FontAwesome5 name="list-ol" size={24} color="white" />}/>
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