import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { ColorValue, TouchableOpacity } from 'react-native';
import useColor from '../../temas/Temas';



export default function Layout (){
    const color = useColor()
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false,

        }}>
            <Tabs.Screen name="scanner" options={{ headerTitle: "Scanner",
                headerRight: ()=> (<TouchableOpacity><Foundation style={{marginRight: 20}}name="refresh" size={24} color="white" /></TouchableOpacity>),
               tabBarIcon:({color, size}: { color: ColorValue, size: number }) => (
                <MaterialIcons name="camera-alt" size={size} color = {color} />
                
            ), 
            headerTintColor: "#ffffff",
            headerStyle: { backgroundColor: "#ff0000"},
            tabBarStyle:{ backgroundColor: color.nome === 'dark'? color.bgPrimary: "#ffffff"}
            }}/>


            <Tabs.Screen name="DrawerNav" 
            options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor:"#ff0000"
                },
                tabBarIcon:({color, size}: { color: ColorValue, size: number }) => (
                    <MaterialIcons name="format-list-numbered" size={size} color={color} />
                ),
                tabBarInactiveTintColor:"#ffffff"
                
                }}/>
        </Tabs>

    )
}