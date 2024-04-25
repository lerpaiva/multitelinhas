import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native"
import useColor from "../../../../temas/Temas";
import InputItens from "@comp/inputItens";


function PagEditar() {
  const color = useColor()
  const styles = StyleSheet.create({
    espacinho:{
        marginTop: 30
    },
    container:{
      flex: 1,
      backgroundColor: color.nome === 'dark'?color.bgPrimary: "#ffffff"
    }
    
    })
  return (
    <View style={styles.container}>
        <ScrollView style={styles.espacinho}>
          <InputItens cor={color} nome="N° inventário"/>
          <InputItens cor={color} nome="Descrição"/>
          <InputItens cor={color} nome="Local"/>
          <InputItens cor={color} nome="Responsável"/>
          <InputItens cor={color} nome="Data de registro"/>
 
        </ScrollView>
    </View>
  )
}

export default PagEditar