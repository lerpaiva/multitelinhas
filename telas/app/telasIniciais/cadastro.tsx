import { ScrollView } from "react-native"
import Inputt from "@comp/input"
import Botao from "@comp/botao";
import Header from "@comp/header";
import useColor from "../../temas/Temas";


function PagCadastro(){
   const color = useColor()
  return (
    <ScrollView style={{backgroundColor: color.bgPrimary, height: 850 }}>
      <Header cor={color.nome === 'dark'? color.bgPrimary: "#ff0000"} texto={"Cadastre-se"}/>
        <Inputt cor={color} nome={"Nome:"} placeholder="Insira seu nome" />
        <Inputt cor={color} nome={"Sobrenome:"} placeholder="Insira seu sobrenome"/>
        <Inputt  cor={color}nome={"Email:"} placeholder="Insira seu email" />
        <Inputt  cor={color} nome={"Telefone:"} placeholder="Insira seu telefone" />
        <Inputt  cor={color} nome={"Senha:"} placeholder="Insira sua senha" secureTextEntry={true}/>
        <Inputt  cor={color} nome={"Confirme sua senha:"} placeholder="Insira sua senha " />
        <Botao  href={""} palavrinha={"Cadastre-se"}/>

    </ScrollView>
  )
}


export default PagCadastro
