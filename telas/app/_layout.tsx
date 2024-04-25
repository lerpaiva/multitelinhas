import { Stack } from 'expo-router/stack';
import useColor from '../temas/Temas';


export default function Layout() {
    const color = useColor()
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false , statusBarColor: color.nome === 'dark'? color.bgPrimary: "#000000"}}/>
            <Stack.Screen name='telasIniciais/senha' options={{headerTransparent: true, headerTitle: "", statusBarColor:color.nome === 'dark'? color.bgPrimary: color.bgInfo, headerTintColor: "white"}}/>
            <Stack.Screen name='telasIniciais/cadastro' options={{headerTransparent: true, headerTitle: "", statusBarColor:color.nome === 'dark'? color.bgPrimary: "#ff0000", headerTintColor: "white"}}/>
            <Stack.Screen name="TabNav" options = {{headerShown: false, statusBarTranslucent: true}}/>
        </Stack>)}
