import { StyleSheet, Text,View, TextInput } from "react-native"

type InputProps = {
    nome: string;
    texto: string;
}
const Inputt = ({nome, texto}: InputProps)=>{
    return(
        <View>
            <Text style={styles.texto}>{nome}</Text>
            <TextInput style={styles.camp} placeholder={texto}/>
        </View>
    )

}
const styles = StyleSheet.create({
    camp:{
        marginTop:15,
        marginStart: 17,
        marginBottom: 1,
        borderColor: "#CDCDCD",
        paddingHorizontal: 3,
        paddingVertical:5,
        fontSize: 11,
        height: 33,
        marginRight: 20,
        backgroundColor: "#f5f5f5",
        borderRadius: 5,
        paddingLeft: 14,
    },
    texto:{
        marginTop: 15,
        marginStart:25,
        fontSize: 14
    }
})
export default Inputt