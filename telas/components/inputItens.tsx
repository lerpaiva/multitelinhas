import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"
import { useState } from "react"
interface InputtProps extends TextInputProps{
    nome: string
}

const InputItens = ({nome, ...props}: InputtProps)=>{
  const [hover, setHover] = useState("#5d5c5c")
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
      backgroundColor: "#ffffff",
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
                setHover("#F39200")
            }} onBlur={() =>{
                setHover("#5d5c5c")
            }}/>
            </View>
    )

}

export default InputItens