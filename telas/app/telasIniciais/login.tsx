import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"
import Inputt from "@comp/input"
import Botao from "@comp/botao";
import Header from "@comp/header";
import { Link } from 'expo-router';
import { useColor } from "../../temas/Temas";

function PagLogin() {
   const cores = useColor()

   return (

      <View>
         <Header cor={cores.bgPrimary} texto={"Login"} />

         <Text style={styles.textinh}>Faça Login para Acessar o Sistema!</Text>
         <Inputt nome={"Email:"} placeholder="Insira seu email" />
         <Inputt nome={"Senha:"} placeholder="Insira sua senha" secureTextEntry={true} />
            <Botao href="TabNav" palavrinha={"Fazer Login"} />
         <View style={styles.azul}>
            <Link href="telasIniciais/cadastro" asChild>
               <TouchableOpacity><Text style={styles.escritinha}>Cadastre-se</Text></TouchableOpacity>
            </Link>
            <Link href="telasIniciais/senha" asChild>
               <TouchableOpacity><Text style={styles.escritinha}>Esqueceu a senha?</Text></TouchableOpacity>
            </Link>
         </View>

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
      marginBottom: 30,

      textAlign: "center"
   },

   escritinha: {
      marginTop: 20,
      color: "#4305C7",
      flexDirection: "row",
      justifyContent: "space-between"

   },
   azul: {
      marginEnd: 20,
      marginStart: 20,
      flexDirection: "row",
      justifyContent: "space-between"
   }
})
export default PagLogin
