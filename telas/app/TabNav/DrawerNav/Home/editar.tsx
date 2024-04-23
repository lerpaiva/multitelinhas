import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native"

import InputItens from "@comp/inputItens";


function PagEditar() {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.espacinho}>
          <InputItens nome="N° inventário"/>
          <InputItens nome="Descrição"/>
          <InputItens nome="Local"/>
          <InputItens nome="Responsável"/>
          <InputItens nome="Data de registro"/>
 
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
espacinho:{
    marginTop: 30
},
container:{
  flex: 1,
  backgroundColor:"#ffffff"
}

})
export default PagEditar