import PagSenha from './app/telasIniciais/senha';
import PagLogin from './app/telasIniciais/login';
import PagCadastro from './app/telasIniciais/cadastro';
import PagInventario from './app/drawer/home/inventario';
import PagCadItens from './app/cadItens';
import { StyleSheet, Text, View } from 'react-native';
import PagDescricao from './app/descrição';
import PagScanner from './app/drawer/home';
import PagLoading from './app/telasIniciais/loading';
import PagEditar from './app/editar';

export default function App() {
  return (
    <View style={styles.container}>
     <PagEditar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});