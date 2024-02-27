import PagSenha from './screens/senha';
import PagLogin from './screens/login';
import PagCadastro from './screens/cadastro';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <PagLogin/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});