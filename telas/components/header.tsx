import { StyleSheet, Text,View, Image } from "react-native"
import useColor from "../temas/Temas"
type HeaderProps = {
    texto: string;
    cor: string;
}
const Header = ({cor, texto}: HeaderProps)=>{
    const color = useColor()
    const estilos = StyleSheet.create({
        container:{
            width: "100%",
            height: 200,
            alignItems:"center",
            justifyContent:"center",
            borderRadius: 5
        }
        ,
        photo:{
            marginTop: 25,
            width: 200,
            height: 51.27
        },
        textinho:{
            color: color.nome === "dark"? "#ffffff": "#ffffff",
            marginTop: 15,
            marginBottom:20,
            fontSize: 20
          }
    })
    return(
        <View style={[estilos.container, {backgroundColor:cor}]}>
            <Image style={estilos.photo} source={require('@assets/Logo.png')}/>
            <Text style={estilos.textinho}>{texto}</Text>
        </View>
    )
    
}
export default Header

