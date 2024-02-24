import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >App de IMC do IFC</Text>
      <Image
          style={styles.logo}
          source={require('./imagens/ifc.png')}
        />
      <View style={styles.container}>
        <Text>Altura</Text>
        <TextInput 
          placeholder='Ex 1.75'
          keyboardType='numeric'
          style={styles.textInput}
          ></TextInput>
        <Text>Peso</Text>
        <TextInput 
          placeholder='Ex 75.3'
          keyboardType='numeric'
          style={styles.textInput}  
        />
        <View style={styles.buttonContainer}>
          <Button
            color='#000'
            style={styles.botao} 
            title='Calcular'
            onPress={msg} ></Button>
        </View>

        <Text style={styles.title}>Lista de items</Text>
        <FlatList
          style={styles.list}
          data={ ['Mobile',"Programação 2"] }
          renderItem={({item}) => mostrarItemLista(item)}
        />
          
      </View>
    </View>
  );
}

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
