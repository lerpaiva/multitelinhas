import PagSenha from './screens/senha';
import PagLogin from './screens/login';
import PagCadastro from './screens/cadastro';
import PagInventario from './screens/inventario';
import PagCadItens from './screens/cadItens';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <PagCadItens/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});