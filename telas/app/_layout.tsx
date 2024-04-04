import { Stack } from 'expo-router/stack';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false , statusBarColor: '#000000'}}/>
            <Stack.Screen name='telasIniciais/senha' options={{ headerTitle: "", statusBarColor:"#011E83", headerTransparent: true, headerTintColor: "white"}}/>
            <Stack.Screen name='telasIniciais/cadastro' options={{headerTransparent: true, headerTitle: "", statusBarColor:"ff0000", headerTintColor: "white"}}/>
            <Stack.Screen name="TabNav" options = {{headerShown: false}}/>
        </Stack>
    )
}
