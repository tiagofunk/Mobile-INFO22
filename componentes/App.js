import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// Colocar o nome depois do import com a primeira letra maiuscula
import PrimeiroComponente from './componentes/PrimeiroComponente';
import CampoTexto from './componentes/CampoTexto';

export default function App() {
  return (
    <View style={styles.view}>
      <CampoTexto titulo="Peso"sugestao='Ex 75.3' tipoTeclado='numeric'/>
      <CampoTexto titulo="Altura"sugestao='Ex 1.75' tipoTeclado='numeric'/>
      <PrimeiroComponente texto="Olá" pessoa="tiago" cor='#00f'/>
      <PrimeiroComponente texto="Tudo bem?" pessoa='ana' cor='#f00'/>
      <PrimeiroComponente texto="Como vc está?" pessoa='tiago' cor='#00f'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  view:{
    width:'100%',
    marginTop: 40,
    flex:1,
    // justifyContent: 'center',
    alignItems: 'center'
  }
})