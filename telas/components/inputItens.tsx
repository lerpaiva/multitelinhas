import { StyleSheet, Text,View, TextInput, TextInputProps } from "react-native"

interface InputtProps extends TextInputProps{
    nome: string
}

const InputItens = ({nome, ...props}: InputtProps)=>{
    return(
        <View>
            <View>
                <Text style={styles.textt}>{nome} <Text style={styles.asterisco}>*</Text></Text>
            </View>
            <View style={styles.container}>
                <TextInput {...props}/>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
  container:{
    height: 51,
    width: 320,
    borderWidth: 1,
    borderColor: "#5d5c5c",
    borderRadius: 5,
    alignSelf: "center",
    marginTop: 50,
    position: "relative"
  },
  textt:{
    position: "absolute",
    marginTop: 40,
    marginStart: 40,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: "#ffffff",
    zIndex: 1
  },
  asterisco:{
    color: "#ff0000"


  },
})
export default InputItens