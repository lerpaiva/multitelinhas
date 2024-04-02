import { View, StyleSheet, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import NavHead from "../components/nav";
import { AntDesign } from '@expo/vector-icons';
import InputItens from "../components/inputItens";
import Footer from "../components/footer";
import Caracteristicas from "../components/caracteristicas";
import BtnFlutua from "@comp/botFlutua";

function PagDescricao() {
  return (
    <View style={styles.container}>
        <NavHead color = "#ff0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} corr="#ffffff" texto="Descrição do Item" icone2={<AntDesign name="pluscircleo" size={24} color="white" />}/> 
        <ScrollView>
            <View style={styles.cinzinha}>
                <Caracteristicas titulo="N° do Inventário:" textinho="957689"/>
                <Caracteristicas titulo="Descrição:" textinho="CADEIRA GIRATÓRIA"/>
                <Caracteristicas titulo="Local:" textinho="SALA C13"/>
                <Caracteristicas titulo="Responsável:" textinho="CARLOS"/>
                <Caracteristicas titulo="Data de Registro" textinho="05/03/2024"/>
            </View>
        </ScrollView>
        <BtnFlutua icone ={<MaterialCommunityIcons name="pencil-circle" size={60} color="#ff0000" />}></BtnFlutua>
        <Footer color="#ffffff" corzinha="#cbcbcb" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="#000000" />} icone2 = {<FontAwesome5 name="list-ol" size={24} color="#000000" />}/>
    </View>
  )
}
const styles = StyleSheet.create({

container:{
  flex: 1
},
cinzinha:{
    width: "100%",
    height: 525,
    backgroundColor: "#fbfbfb",
    paddingTop: 30
}

})
export default PagDescricao