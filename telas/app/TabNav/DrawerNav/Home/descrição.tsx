import { View, StyleSheet, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Caracteristicas from "@comp/caracteristicas";
import BtnFlutua from "@comp/botFlutua";

function PagDescricao() {
  return (
    <View style={styles.container}>
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