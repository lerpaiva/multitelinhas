import { useColorScheme } from "react-native"


interface Cores{
    bgPrimary: string
    bgSecundary: string
    bgInfo?: string

}

const light: Cores = {
    bgPrimary: "#ffffff",
    bgSecundary: "#ff0000",
    bgInfo: "#011e83"

}
const dark: Cores = {
    bgPrimary: "#240707",
    bgSecundary: "#ff0000"
}

export function useColor(){
  const colorScheme = useColorScheme();

  if (colorScheme === 'dark') {
    return dark
  } else {
    return light
  }
}