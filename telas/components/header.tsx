import { StyleSheet, Text,View, TextInput, TouchableOpacity,StatusBar, Image } from "react-native"

type HeaderProps = {
    texto: string;
    cor: string;
}
const Header = ({cor, texto}: HeaderProps)=>{
    return(
        <View style={[estilos.container, {backgroundColor:cor}]}>
            <Image style={estilos.photo} source={require('../assets/Logo.png')}/>
            <Text style={estilos.textinho}>{texto}</Text>
        </View>
    )
    
}
export default Header

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
        color:"#FFFFFF",
        marginTop: 15,
        marginBottom:20,
        fontSize: 20
      }
})