import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"
interface InputProps extends TextInputProps{
    nome: string
}


const Inputt = ({nome, ...props}: InputProps)=>{
    const [hover, setHover] = useState("#F5F5F5")
    const styles = StyleSheet.create({
        camp:{
            borderWidth: 1,
            borderColor: hover,
            marginTop:15,
            marginStart: 17,
            marginBottom: 1,
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
    return(
        <View>
            <Text style={styles.texto}>{nome}</Text>
            <TextInput style={styles.camp} {...props} onFocus={() =>{
                setHover("#F39200")
            }} onBlur={() =>{
                setHover("#F5F5F5")
            }}
            />
        </View>
    )

}

export default Inputt