import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';
import { useState } from 'react';

const PilhaTelas = createNativeStackNavigator()

function TelaInicial( {navigation} ){
    const [peso, setPeso] = useState(0.0);
    const [altura, setAltura] = useState(0.0);

    function verificaPeso(){ return peso != NaN }
    function verificaAltura(){ return altura != NaN }

    function calcularIMC(){
        return (peso/(altura*altura)).toFixed(2)
    }

    function eventoCalculoBotao(){
        if( verificaPeso() && verificaAltura() ){
            var imc = calcularIMC()
            navigation.navigate('TelaResultado',{imc})
        }else{
            alert("Não deixe campos vazios")
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Vamos calcular o seu IMC</Text>
            <Text>Peso</Text>
            <TextInput 
                placeholder='Ex 85.5'
                keyboardType='numeric'
                style={styles.textInput}
                onChangeText={ function(text){ setPeso( parseFloat( text) ) }}/>
            <Text>Altura</Text>
            <TextInput 
                placeholder='Ex 1.75'
                keyboardType='numeric'
                style={styles.textInput}
                onChangeText={ function(text){ setAltura(parseFloat(text)) } }/>
            <View style={styles.buttonContainer}>
                <Button
                    color='#000'
                    style={styles.botao}
                    title='Calcular'
                    onPress={ function(){ eventoCalculoBotao() } } />
            </View>
        </View>
    )
}

function TelaResultado( {route, navigation} ){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Seu resultado!</Text>
            <Text style={styles.titulo}>{route.params.imc}</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title='Voltar'
                    color="black"
                    onPress={()=>navigation.goBack()}
                />
            </View>
        </View>
    )
}

export default function App() {
  
  return (
    <NavigationContainer>
        <PilhaTelas.Navigator initialRouteName='TelaInicial'>
            <PilhaTelas.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={{title:"Tela inicial"}}
            />
            <PilhaTelas.Screen
                name="TelaResultado"
                component={TelaResultado}
                options={{title:"Resultado"}}
            />
           
        </PilhaTelas.Navigator>
    </NavigationContainer>
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
});