import { StyleSheet, Text,View, TextInput, TouchableOpacity } from "react-native"


const botao = ({palavrinha})=>{
    return(
        <View>
            <TouchableOpacity style={style.botao}>
                <Text style={style.cor}>{palavrinha}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default botao

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
        marginTop: 30
    },
    cor:{
        alignSelf:"center",
        color:"#ffffff",
        fontSize: 20
      }
    
    
})