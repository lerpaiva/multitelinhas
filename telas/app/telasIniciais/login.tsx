import { View, Text, StyleSheet, TouchableOpacity, } from "react-native"
import Inputt from "@comp/input"
import Botao from "@comp/botao";
import Header from "@comp/header";
import { Link } from 'expo-router';
import useColor from "../../temas/Temas";


function PagLogin() {
   const color = useColor()
   const styles = StyleSheet.create({
      escrita: {
         color: color.textcolorPrimary,
      },
      container:{
         backgroundColor: color.bgPrimary,
         marginLeft: 20,
         marginRight: 20,
         gap: 10,
         height: "100%"
      },
      textinh: {
         marginTop: 50,
         alignSelf: "center",
         fontWeight: "500",
         fontSize: 16,
         marginBottom: 30,
         textAlign: "center",
         color:  color.textcolorPrimary
      },
   
      escritinha: {
         marginTop: 20,
         color: color.nome === 'dark'? color.inputtextcolorPrimaryVariant: "#011E83",
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
   return (

      <View style={{backgroundColor: color.bgPrimary, height: 850}}>
         <Header cor={color.nome === 'dark'? color.bgPrimary: "#000000"} texto={"Login"} />
         <View style={styles.container}>
         <Text style={styles.textinh}>Faça Login para Acessar o Sistema!</Text>
         <Inputt nome={"Email:"} placeholder="Insira seu email" cor={color}/>
         <Inputt nome={"Senha:"} placeholder="Insira sua senha" secureTextEntry={true} cor={color} />
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

      </View>
   )

}




export default PagLogin
