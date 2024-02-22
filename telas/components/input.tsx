import { StyleSheet, Text,View, TextInput } from "react-native"

const Inputt = ({nome, texto})=>{
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
        marginStart: 20,
        marginBottom: 1,
        borderColor: "#CDCDCD",
        paddingHorizontal: 3,
        paddingVertical:5,
        fontSize: 14,
        height: 45,
        marginRight: 25,
        backgroundColor: "#f5f5f5",
        borderRadius: 5
        
    },
    texto:{
        marginTop:30,
        marginStart:25,
        fontSize: 14
    }
})
export default Inputt