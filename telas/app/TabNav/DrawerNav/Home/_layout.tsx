import { DrawerToggleButton } from '@react-navigation/drawer'
import {Stack} from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name='inventario' options={{ headerTitle: "Lista", headerTitleAlign: "center",
                headerLeft: () =>(<DrawerToggleButton/>
                ),
                headerSearchBarOptions:{
                    placeholder: "Pesquisar"
                }
                
                }}/>
            <Stack.Screen name='cadItens' options={{ headerTintColor: "#ffffff",
            headerStyle: { backgroundColor: "#ff0000"}, headerTitleAlign: "center", 
                 headerRight: ()=> (<MaterialIcons style={{marginRight: 10}} name="add-circle-outline" size={24} color="white" />),
                
            }} ></Stack.Screen>

            <Stack.Screen name='editar' options={{ headerTintColor: "#ffffff",
            headerStyle: { backgroundColor: "#ff0000"},headerTitleAlign: "center", 
                 headerRight: ()=> (<AntDesign style={{marginRight: 10}} name="checkcircle" size={24} color="white" />),
                
            }} ></Stack.Screen>

            <Stack.Screen name='descricao' options={{ headerTintColor: "#ffffff",
            headerStyle: { backgroundColor: "#ff0000"}, headerTitleAlign: "center" , 
                 headerRight: ()=> (<Foundation style={{marginRight: 10}}name="refresh" size={24} color="white" />),
                
            }} ></Stack.Screen>
        </Stack>
    )
}