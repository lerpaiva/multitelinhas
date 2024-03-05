import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native"
import Inputt from "../components/input"
import Botao from "../components/botao";
import Header from "../components/header";
import { StatusBar } from "expo-status-bar";
import NavHead from "../components/nav";
import { AntDesign } from '@expo/vector-icons';
import InputItens from "../components/inputItens";

function PagCadItens() {
  return (
    <View>
            <NavHead color = "#ff0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} corr="#ffffff" texto="Cadastro de Itens" icone2={<AntDesign name="pluscircleo" size={24} color="white" />}/> 
        <InputItens nome="N° inventário"/>
        <InputItens nome="Descrição"/>
        <InputItens nome="Local"/>
        <InputItens nome="Responsável"/>
        <InputItens nome="Data de registro"/>
    </View>
  )
}
const styles = StyleSheet.create({
espacinho:{
    marginTop: 10
}

})
export default PagCadItens