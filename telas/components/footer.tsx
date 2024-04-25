import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity} from 'react-native';


function Footer({...props}) {
    return (
        <View style={[styles.container, {backgroundColor: props.color},{borderColor: props.corzinha}]}>
            <StatusBar style="dark"/>
            <TouchableOpacity  style={styles.icon}>{props.icone}</TouchableOpacity>
            <TouchableOpacity style={styles.icon}>{props.icone2}</TouchableOpacity>
        </View>
      );
    };

    const styles = StyleSheet.create({
        container: {
            width:"100%",
            height: 60,
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "center",
            gap: 20,
            borderTopWidth: 1,
        },
        icon:{
            marginTop: 16,
            height: 30,
            width: 30
        }
    });

    export default Footer