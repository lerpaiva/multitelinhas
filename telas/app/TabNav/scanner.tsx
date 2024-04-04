import { View, StyleSheet, Image, ScrollView, } from "react-native"

function PagScanner() {
  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.cinzinha}>
                <Image style={styles.imgzinha} source={require('@assets/iconScan.png')}></Image>
            </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
cinzinha:{
        width: "100%",
        height: 525,
        backgroundColor: "#fbfbfb",
        alignItems: "center",
        justifyContent: "flex-end"
},
container:{
  flex: 1
},
imgzinha:{
    width: 300,
    height: 300,
    marginBottom: 40
}

})
export default PagScanner