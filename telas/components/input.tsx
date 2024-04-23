import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"
import useColor, { Cores } from "../temas/Temas"
interface InputProps extends TextInputProps{
    nome: string,
    cor: Cores
}


const Inputt = ({nome, ...props}: InputProps)=>{
    const color= useColor()
    const [hover, setHover] = useState (props.cor.inputbgPrimaryVariant)
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
            backgroundColor: color.inputbgPrimaryVariant,
            borderRadius: 5,
            paddingLeft: 14,
        },
        texto:{
            marginTop: 15,
            marginStart:25,
            fontSize: 14,
            color: color.inputtextcolorPrimaryVariant
        }
    })
    return(
        <View >
            <Text style={styles.texto}>{nome}</Text>
            <TextInput style={styles.camp} placeholderTextColor={props.cor.inputtextcolorPrimaryVariant} {...props} onFocus={() =>{
                setHover(props.cor.inputbgHover)
            }} onBlur={() =>{
                setHover(props.cor.inputbgPrimaryVariant)
            }}
            />
        </View>
    )

}

export default Inputt