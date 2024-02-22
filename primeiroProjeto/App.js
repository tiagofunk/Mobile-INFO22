import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} >App de IMC</Text>
      <View>
        <Image
          style={styles.logo}
          source={require('./imagens/ifc.png')}
        />
      </View>
      <View style={styles.container}>
        <Text>Altura</Text>
        <TextInput 
          placeholder='Ex 1.75'
          keyboardType='numeric'
          style={styles.textInput}
          />
        <Text>Peso</Text>
        <TextInput 
          placeholder='Ex 75.3'
          keyboardType='numeric'
          style={styles.textInput}  
        />
        <Button title='Calcular'/>
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
  },
  title: {
    marginTop: '10%',
  },
  logo: {
    width: 50,
    height: 50,
  },
  textInput: {
    borderWidth: 1,
    paddingLeft: 20,
    paddingRight: 20,
  }
});
