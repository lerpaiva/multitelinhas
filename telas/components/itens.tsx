import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import useColor from "../temas/Temas";


const Itenss = ({...props})=>{
    const color = useColor()
    const styles = StyleSheet.create({
        cont:{
            height: 60,
            width: "100%",
            borderTopWidth: 1,
            borderColor: color.nome === 'dark'? "#3A2828": "#ffffff",
            paddingLeft: 20,
            paddingTop: 10,
            marginBottom: 10
            
        },
        numm:{
            color: color.nome === 'dark'? "#ffffff": "#000000",
            fontSize: 16,
            paddingBottom: 5,
            fontWeight: "600"
        },
        nomee:{
            fontSize: 14,
            fontWeight: "400",
            color: color.nome === 'dark'? "#ffffff": "#000000"
        }
    })
    return(
    <Link href={props.href} asChild>
            <TouchableOpacity style={styles.cont}>
                <Text style={styles.numm}>{props.cod}</Text>
                <Text style={styles.nomee}>{props.nome}</Text>
            </TouchableOpacity>
    </Link>
    )

}

export default Itenss

