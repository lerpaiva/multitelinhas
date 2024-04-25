
import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"
import useColor, { Cores } from "../temas/Temas"
interface InputtProps extends TextInputProps{
    nome: string,
    cor: Cores
}

const InputItens = ({nome, ...props}: InputtProps)=>{
  const color = useColor()
  const [hover, setHover] = useState(props.cor.inputtextcolorPrimaryVariant)
  const styles = StyleSheet.create({
    container:{
      height: 51,
      width: "100%",
      borderWidth: 1,
      borderColor: hover,
      borderRadius: 5,
      alignSelf: "center",
      marginTop: 40,
      position: "relative",
      paddingLeft: 10,
      zIndex: -1
    },
    comp:{
      paddingStart: 30,
      paddingEnd: 30,
    },
    textt:{
      position: "absolute",
      marginTop: 30,
      marginStart: 10,
      paddingStart: 10,
      paddingEnd: 10,
      backgroundColor:  color.nome === 'dark'?color.bgPrimary: "#ffffff",
      zIndex: 1,
      color: hover
      
    },
    asterisco:{
      color: "#ff0000"
  
  
    },
  })
  
  
  return(
        <View style={styles.comp}>

            <View>
                <Text style={styles.textt}>{nome} <Text style={styles.asterisco}>*</Text></Text>
            </View>
                <TextInput style= {styles.container} {...props} onFocus={() =>{
                setHover(props.cor.inputbgHover)
            }} onBlur={() =>{
                setHover(props.cor.inputtextcolorPrimaryVariant)
            }}/>
            </View>
    )

}

export default InputItens