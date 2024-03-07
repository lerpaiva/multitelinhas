import { StyleSheet, View, TouchableOpacity } from "react-native"

function BtnFlutua({...props}) {
    return (
        <View>
            <TouchableOpacity style={styles.botaoo}>{props.icone}</TouchableOpacity>
        </View>
      );
    };

    const styles = StyleSheet.create({
        botaoo:{
            position: "absolute",
            zIndex: 1,
            bottom: 20,
            right: 20,
        }});
    
export default BtnFlutua