import { StyleSheet, Text,View, TextInput, TouchableOpacity } from "react-native"
import { LinkProps } from "expo-router/build/link/Link"
import { Link } from "expo-router/build/link/Link"

interface LinkButtonProps extends LinkProps {
    palavrinha: string;
}

const Botao = ({palavrinha, ...props}:LinkButtonProps)=>{
    return(
        <Link {...props} asChild>
            <TouchableOpacity style={style.botao}>
                <Text style={style.cor}>{palavrinha}</Text>
            </TouchableOpacity>
        </Link>
    )
}
export default Botao

const style = StyleSheet.create({
    botao:{
        width: 350,
        height: 47,
        backgroundColor:"#000000",
        color:"#ffffff",
        borderRadius: 5,
        alignSelf: "center",
        justifyContent:"center",
        marginStart: 0,
        marginTop: 25,
        marginBottom: 8
    },
    cor:{
        alignSelf:"center",
        color:"#ffffff",
        fontSize: 14
      }
    
    
})