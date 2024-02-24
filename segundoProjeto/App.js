import {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

export default function App() {

  const [nome,setNome] = useState(null);
  const [mensagem,setMensagem] = useState(null);

  function mostrarNome(){
    setMensagem("Nome Digitado: " + nome)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Nome de pessoas</Text>
      
      <View style={styles.container}>
        <Text>Nome</Text>
        <TextInput 
          onChangeText={(text) => setNome(text) }
          placeholder='Digite um nome'
          keyboardType='default'
          style={styles.textInput}
          ></TextInput>
        <View style={styles.buttonContainer}>
          <Button
            color='#000'
            style={styles.botao} 
            title='Adicionar'
            onPress={mostrarNome} ></Button>
        </View>

        <Text style={styles.title}>Resultado</Text>
        <Text>{nome}</Text>
        <Text>{mensagem}</Text>

        {
          nome == "Tiago" ?
          <Text>Olá novamente</Text>
          :
          <Text>Não te conheço</Text>
        }
          
      </View>
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
  title: {
    marginTop: '10%',
    fontSize: 20
  },
  logo: {
    width: 50,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
    width:'70%'
  },
  buttonContainer:{
    marginTop: '5%', 
    width: '70%',
  },
  list:{
    width:'70%',
  },
  item:{
    paddingHorizontal: '2%',
    paddingVertical: '5%',
    borderColor: 'black',
    borderBottomWidth: 1
  }
});
