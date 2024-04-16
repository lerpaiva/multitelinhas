import {Drawer} from 'expo-router/drawer'
import CustomDrawer from '@comp/CustomDrawer'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function layout() {
  return (
    <Drawer drawerContent={(...props) => (
      CustomDrawer(...props)
    )} screenOptions={{
        drawerInactiveTintColor: "#d9d9d9"
    }}>
        <Drawer.Screen name="Home" options={{ headerShown: false, drawerIcon: ({size, color}) =>(
          <MaterialIcons name="home" size={size} color={color} />
        )  }} />

        <Drawer.Screen name="Perfil" options={{ headerShown: false, drawerIcon: ({size, color}) =>(
          <FontAwesome5 name="user-alt" size={size} color={color} />
        )  }} />
    
        <Drawer.Screen name="Sobre" options={{ headerShown: false, drawerIcon: ({size, color}) =>(
          <AntDesign name="exclamationcircle" size={size} color={color} />
        )  }} />

        <Drawer.Screen name="Suporte" options={{ headerShown: false, drawerIcon: ({size, color}) =>(
          <Ionicons name="chatbox-ellipses" size={size} color={color} />
        )  }} />

        <Drawer.Screen name="Sair" options={{ headerShown: false, drawerIcon: ({size, color}) =>(
        <Ionicons name="log-out" size={size} color={color} />
        )  }} />
    </Drawer>
  )}