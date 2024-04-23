import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Caracteristicas from "@comp/caracteristicas";
import BtnFlutua from "@comp/botFlutua";
import { Link } from "expo-router";

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
        <Link href="TabNav/DrawerNav/Home/editar" asChild>
            <TouchableOpacity style={styles.botaoo}><MaterialCommunityIcons name="pencil-circle" size={60} color="#ff0000" /></TouchableOpacity>
        </Link>

        
    </View>
  )
}
const styles = StyleSheet.create({

  botaoo:{
    position: "absolute",
    zIndex: 1,
    bottom: 20,
    right: 20,
},

container:{
  flex: 1,
  backgroundColor: "white"
},
cinzinha:{
    width: "100%",
    height: 525,
    backgroundColor: "#fbfbfb",
    paddingTop: 30
}

})
export default PagDescricao