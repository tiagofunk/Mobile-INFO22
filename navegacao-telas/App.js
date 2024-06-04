import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

export default function App() {

  function msg(){
    Alert.alert("Botão foi clickado!")
  }
  function mostrarItemLista(item){
    return ( 
      <View style={styles.item}>
        <Text >{item}</Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Navegação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    width: '100%'
  },
  titulo: {
    marginTop: '10%',
    fontSize: 20
  }
});