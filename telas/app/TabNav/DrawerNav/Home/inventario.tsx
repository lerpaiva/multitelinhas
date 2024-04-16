import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import Itenss from "@comp/itens";

function PagInventario() {
    const navigation = useNavigation();

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
        <Link href="cadItens" asChild>
            <TouchableOpacity style={styles.botaoo}><AntDesign name="pluscircle" size={60} color="#ff0000" /></TouchableOpacity>
        </Link>
        </View>
            
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    botaoo:{
        position: "absolute",
        zIndex: 1,
        bottom: 20,
        right: 20,
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