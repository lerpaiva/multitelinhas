import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type NavProps = {
    nome: string;
    size: number;
    color: string;
}

const NavHeader = ({ nome, size, color }: NavProps) => {
    return (
        <View style={styles.caixa}>
            <Ionicons name={nome} size={size} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    caixa: {
        height: 60,
        width: "100%"
    }
});

export default NavHeader;
