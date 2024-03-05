import { StyleSheet, Text,View, TextInput } from "react-native"

type ItensProps = {
    cod: string;
    nome: string;
}
const Itenss = ({cod, nome}: ItensProps)=>{
    return(
      <View style={styles.cont}>
        <Text style={styles.numm}>{cod}</Text>
        <Text>{nome}</Text>
      </View>
    )

}
const styles = StyleSheet.create({
    cont:{
        height: 60,
        width: "100%",
        borderTopWidth: 1,
        borderColor: "#F5F5F5",
        paddingLeft: 20,
        paddingTop: 10,
        marginBottom: 10
        
    },
    numm:{
        fontSize: 16,
        paddingBottom: 5,
        fontWeight: "600"
    },
    nomee:{
        fontSize: 14,
        fontWeight: "400"
    }
})
export default Itenss

