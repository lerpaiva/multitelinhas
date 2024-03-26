import PagSenha from './app/senha';
import PagLogin from './app/index';
import PagCadastro from './app/cadastro';
import PagInventario from './app/drawer/home/inventario';
import PagCadItens from './app/cadItens';
import { StyleSheet, Text, View } from 'react-native';
import PagDescricao from './app/descrição';
import PagScanner from './app/drawer/home/scanner';
import PagLoading from './app/loading';
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