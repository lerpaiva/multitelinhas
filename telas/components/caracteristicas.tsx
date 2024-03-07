import { StyleSheet, View, TouchableOpacity, Text } from "react-native"

type CaracProps = {
    titulo: string;
    textinho: string;
}

function Caracteristicas({titulo,textinho,...props}:CaracProps) {
    return (
        <View style={styles.caixinha}>
            <Text style={styles.tit}>{titulo}</Text>
            <Text style={styles.textin}>{textinho}</Text>
      </View>
      );
    };

    const styles = StyleSheet.create({
        tit:{
            fontSize: 11,
            paddingBottom: 5,
            fontWeight: "600"
        },
        textin:{
            fontSize: 16,
            fontWeight: "400"
        },
        caixinha:{
            paddingLeft: 20,
            marginBottom: 20
        }
    });
    
export default Caracteristicas