import { DrawerItemList} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native'

export default function CustomDrawer(props: any){
    return(
        <View style={{marginTop: 60}}>
            <View style={{padding: 20, display: "flex", flexDirection: "row",marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "#D9D9D9" }}>
                <Image source={require('@assets/homem.png')}/>
                    <View style={{marginLeft: 15, marginTop: 18}}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>
                            Flavio Josefo
                        </Text>
                        <Text style={{color: "#595959"}}>flavio@email.com</Text>
                    </View>
            </View>
            <DrawerItemList {...props}/>

        </View>
    )
}