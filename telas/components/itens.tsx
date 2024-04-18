import { Link } from "expo-router";
import { StyleSheet, Text,View, TextInput } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

type ItensProps = {
    cod: string;
    nome: string;
}
const Itenss = ({...props})=>{
    return(
    <Link href={props} asChild>
            <TouchableOpacity style={styles.cont}>
                <Text style={styles.numm}>{props.cod}</Text>
                <Text>{props.nome}</Text>
            </TouchableOpacity>
    </Link>
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

