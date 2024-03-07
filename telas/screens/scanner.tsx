import { View, StyleSheet, Image, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import NavHead from "../components/nav";
import { AntDesign } from '@expo/vector-icons';
import Footer from "../components/footer";
import { Ionicons } from '@expo/vector-icons';

function PagScanner() {
  return (
    <View style={styles.container}>
        <NavHead color = "#ff0000" icone={<AntDesign name="arrowleft" size={24} color="white" />} corr="#ffffff" texto="Descrição do Item" icone2={<Ionicons name="reload" size={24} color="#ffffff" />}/> 
        <ScrollView>
            <View style={styles.cinzinha}>
                <Image style={styles.imgzinha} source={require('../assets/iconScan.png')}></Image>
            </View>
        </ScrollView>
        <Footer color="#ffffff" corzinha="#cbcbcb" icone={<MaterialCommunityIcons name="camera-flip" size={24} color="#000000" />} icone2 = {<FontAwesome5 name="list-ol" size={24} color="#000000" />}/>
    </View>
  )
}
const styles = StyleSheet.create({
cinzinha:{
        width: "100%",
        height: 525,
        backgroundColor: "#fbfbfb",
        alignItems: "center",
        justifyContent: "flex-end"
},
container:{
  flex: 1
},
imgzinha:{
    width: 300,
    height: 300,
    marginBottom: 40
}

})
export default PagScanner