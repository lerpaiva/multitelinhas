import { Foundation } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { ColorValue } from 'react-native';



export default function Layout (){
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false
            

        }}>
            <Tabs.Screen name="scanner" options={{
                headerRight: ()=> (<Foundation style={{marginRight: 20}}name="refresh" size={24} color="white" />),
               tabBarIcon:({color, size}: { color: ColorValue, size: number }) => (
                <MaterialIcons name="camera-alt" size={size} color = {color} />
                
            ), 
            headerTintColor: "#ffffff",
            headerStyle: { backgroundColor: "#ff0000"}
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
                tabBarInactiveTintColor: "#fff"
                
                }}/>
        </Tabs>

    )
}