import { DrawerToggleButton } from '@react-navigation/drawer'
import {Stack} from 'expo-router'

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen name='inventario' options={{
                headerLeft: () =>(<DrawerToggleButton/>
                ),
                headerSearchBarOptions:{
                    placeholder: "Pesquisar"
                }
                
                }}/>
        </Stack>
    )
}