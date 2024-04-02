import { View, StyleSheet, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import NavHead from "@comp/nav";
import { AntDesign } from '@expo/vector-icons';
import InputItens from "@comp/inputItens";
import Footer from "@comp/footer";

function PagCadItens() {
  return (
    <View style={styles.container}>
        <NavHead color = "#ff0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} corr="#ffffff" texto="Cadastro de Itens" icone2={<AntDesign name="pluscircleo" size={24} color="white" />}/> 
        <ScrollView style={styles.espacinho}>
          <InputItens nome="N° inventário"/>
          <InputItens nome="Descrição"/>
          <InputItens nome="Local"/>
          <InputItens nome="Responsável"/>
          <InputItens nome="Data de registro"/>
 
        </ScrollView>
        <Footer color="#ffffff" corzinha="#cbcbcb" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="#000000" />} icone2 = {<FontAwesome5 name="list-ol" size={24} color="#000000" />}/>
    </View>
  )
}

const styles = StyleSheet.create({
espacinho:{
    marginTop: 30
},
container:{
  flex: 1
}

})
export default PagCadItens