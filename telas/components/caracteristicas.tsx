import { StyleSheet, View, Text } from "react-native"
import useColor from "../temas/Temas";

type CaracProps = {
    titulo: string;
    textinho: string;
}

function Caracteristicas({titulo,textinho}:CaracProps) {
    const color = useColor()
    const styles = StyleSheet.create({
        tit:{
            fontSize: 11,
            paddingBottom: 5,
            fontWeight: "600",
            color: color.nome === 'dark'?"#ffffff": "#000000"
        },
        textin:{
            fontSize: 16,
            fontWeight: "400",
            color: color.nome === 'dark'?"#ffffff": "#000000"
        },
        caixinha:{
            paddingLeft: 20,
            marginBottom: 20
        }
    });
    return (
        <View style={styles.caixinha}>
            <Text style={styles.tit}>{titulo}</Text>
            <Text style={styles.textin}>{textinho}</Text>
      </View>
      );
    };

   
    
export default Caracteristicas