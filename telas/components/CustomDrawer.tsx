import { DrawerItemList} from '@react-navigation/drawer';
import {View, Text, Image} from 'react-native'
import useColor from '../temas/Temas';

export default function CustomDrawer(props: any){
    const color = useColor()
    return(
        <View style={{marginTop: 60}}>
            <View style={{padding: 20, display: "flex", flexDirection: "row",marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "#D9D9D9" }}>
                <Image source={require('@assets/homem.png')}/>
                    <View style={{marginLeft: 15, marginTop: 18}}>
                        <Text style={{fontWeight: "bold", fontSize: 16, color: color.nome === 'dark'? "#ffffff": "#000000"}}>
                            Flavio Josefo
                        </Text>
                        <Text style={{color: color.nome === 'dark'? "#ffffff": "#000000"}}>flavio@email.com</Text>
                    </View>
            </View>
            <DrawerItemList {...props}/>

        </View>
    )
}