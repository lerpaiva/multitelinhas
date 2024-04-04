import { View, Text, StyleSheet } from "react-native"
import Inputt from "@comp/input"
import Botao from "@comp/botao";
import Header from "@comp/header";

function PagSenha() {
  return (
    <View>
      <Header cor={"#011E83"} texto={"Recuperação de Senha"} />
      <Text style={styles.textinh}>Insira seu e-mail para recuperar
        a senha</Text>
      <Inputt nome={"Email:"} placeholder="Insira seu email"/>
      <Botao href="" palavrinha={"Recuperar"} />
    </View>
  )
}
const styles = StyleSheet.create({
  escrita: {
    color: "#ffffff"
  },
  textinh: {
    marginTop: 50,
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 16,
    maxWidth: 230,
    textAlign: "center"
  }
})
export default PagSenha

