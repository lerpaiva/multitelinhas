import { DrawerToggleButton } from '@react-navigation/drawer'
import {Stack} from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import useColor from '../../../../temas/Temas';

export default function Layout(){
    const color = useColor()
    return(
        <Stack>
            <Stack.Screen name='inventario' options={{ headerTitle: "Lista",headerTitleStyle:{color: color.nome === 'dark'? "#ffffff": "#000000"}, headerTitleAlign: "center",
                headerLeft: () =>(<DrawerToggleButton tintColor={color.inputtextcolorPrimaryVariant}/>
                ),
                headerSearchBarOptions:{
                    headerIconColor: color.inputtextcolorPrimaryVariant
                },
                headerStyle:{
                    backgroundColor: color.nome === 'dark'? color.bgPrimary: "#ffffff"
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