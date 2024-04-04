
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";


export default function Layout (){
    return(
        <Tabs screenOptions={{
            tabBarShowLabel: false
            

        }}>
            <Tabs.Screen name="scanner" options={{
               tabBarIcon:({color, size}) => (
                <MaterialIcons name="camera-alt" size={size} color = {color} />
            )
            }}/>
            <Tabs.Screen name="DrawerNav" 
            options={{
                headerShown: false,
                tabBarStyle:{
                    backgroundColor:"#ff0000"
                },
                tabBarIcon:({color, size}) => (
                    <MaterialIcons name="format-list-numbered" size={size} color={color} />
                ),
                tabBarInactiveTintColor: "#fff"
                
                }}/>
        </Tabs>
    )
}