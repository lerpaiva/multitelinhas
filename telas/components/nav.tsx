import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


export default function NavHead({...props}) {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <StatusBar style="dark"/>
            <TouchableOpacity>{props.icone}</TouchableOpacity>
            <Text style={[styles.texto, {color: props.corr}]}>{props.texto}</Text>
            <TouchableOpacity>{props.icone2}</TouchableOpacity>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            height: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "#f5f5f5",
            gap: 10,
            marginTop: 30,
            paddingTop: 15,
            paddingLeft: 20,
            paddingRight: 20
        },
        texto: {
            marginTop: 5,
            fontSize: 14,
            color: "#595959", 
            fontWeight: "600"
        },
    
    });