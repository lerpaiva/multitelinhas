import { StyleSheet, ScrollView } from "react-native"
import Inputt from "@comp/input"
import Botao from "@comp/botao";
import Header from "@comp/header";


function PagCadastro(){
  return (
    <ScrollView>
      <Header cor={"#FF0000"} texto={"Cadastre-se"}/>
        <Inputt nome={"Nome:"} placeholder="Insira seu nome" />
        <Inputt nome={"Sobrenome:"} placeholder="Insira seu sobrenome"/>
        <Inputt nome={"Email:"} placeholder="Insira seu email" />
        <Inputt nome={"Telefone:"} placeholder="Insira seu telefone" />
        <Inputt nome={"Senha:"} placeholder="Insira sua senha" secureTextEntry={true}/>
        <Inputt nome={"Confirme sua senha:"} placeholder="Insira sua senha " />
        <Botao href={""} palavrinha={"Cadastre-se"}/>

    </ScrollView>
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
export default PagCadastro
