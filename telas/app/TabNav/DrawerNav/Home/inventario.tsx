import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
import { useNavigation } from "expo-router";
import { Link } from "expo-router";
import Itenss from "@comp/itens";

import { AntDesign } from '@expo/vector-icons';
import useColor from "../../../../temas/Temas";

function PagInventario() {
    const navigation = useNavigation();
    const color = useColor()
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: color.bgPrimary
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
    return (

        <View style={styles.container}>
        <ScrollView>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
                <Itenss href="TabNav/DrawerNav/Home/descricao" cod="956389" nome="CADEIRAS SENAI"/>
        </ScrollView >
        <Link href="TabNav/DrawerNav/Home/cadItens" asChild>
            <TouchableOpacity style={styles.botaoo}><AntDesign name="pluscircle" size={60} color="#ff0000" /></TouchableOpacity>
        </Link>
        </View>
            
  )
}

export default PagInventario