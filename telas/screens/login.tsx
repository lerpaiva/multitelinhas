import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native"
import Inputt from "../components/input"
import Botao from "../components/botao";
import Header from "../components/header";
import { StatusBar } from "expo-status-bar";

function PagLogin(){
  return (
    <View>
      <Header cor={"#000000"} texto={"Login"}/>
      <StatusBar style="light" />
      <Text style={styles.textinh}>Faça Login para Acessar o Sistema!</Text>
        <Inputt nome={"Email:"} placeholder="Insira seu email"/>
        <Inputt nome={"Senha:"} placeholder="Insira sua senha" secureTextEntry={true}/>
        <Botao palavrinha={"Fazer Login"}/>
        <View style={styles.azul}>
        <TouchableOpacity><Text style={styles.escritinha}>Cadastre-se</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.escritinha}>Esqueceu a senha?</Text></TouchableOpacity>
        </View>

    </View>
  )
}
const styles = StyleSheet.create({
 escrita:{
    color:"#ffffff"
 },
 textinh:{
    marginTop: 50,
    alignSelf:"center",
    fontWeight:"500",
    fontSize: 16,
    marginBottom: 30,

    textAlign:"center"
 }, 

 escritinha:{
    marginTop: 20,
    color: "#4305C7", 
    flexDirection: "row",
    justifyContent: "space-between"
 
},
 azul:{
    marginEnd: 20,
    marginStart: 20,
    flexDirection: "row",
    justifyContent: "space-between"
 }
})
export default PagLogin
