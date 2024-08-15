import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import SyncStorage from 'sync-storage';

const PilhaTelas = createNativeStackNavigator()

function TelaInicial( {route, navigation} ){
    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);

    function atualizarPeso( texto ){
        if( texto != null ){
            setPeso( parseFloat( texto ) )
        }
    }
    function atualizarAltura( texto ){
        if( texto != null ){
            setAltura( parseFloat( texto ) )
        }
    }

    function calcularIMC(){
        return parseFloat( (peso/(altura*altura)).toFixed(2) )
    }

    function salvarIMC(){
        var data = Date.now()
        var imc = {
            data, peso, altura, imc: calcularIMC()
        }
        SyncStorage.set(`${data}`, imc);
    }

    function eventoCalculoBotao(){
        if( peso == null || altura == null ){
            Alert.alert("Não deixe campos vazios!")
        }else{
            var imc = calcularIMC()
            salvarIMC()
            navigation.navigate('TelaResultado',{imc})
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
                onChangeText={ function(text){ atualizarPeso( text ) }}/>
            <Text>Altura</Text>
            <TextInput 
                placeholder='Ex 1.75'
                keyboardType='numeric'
                style={styles.textInput}
                onChangeText={ function(text){ atualizarAltura( text ) } }/>
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
            <View style={styles.buttonContainer}>
                <Button
                    title='Histórico'
                    color="black"
                    onPress={function(){navigation.navigate('TelaHistorico')}}
                />
            </View>
        </View>
    )
}

function TelaHistorico( {route, navigation} ){
    const [historico, setHistorico] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const chaves = SyncStorage.getAllKeys()
                const historicoData = await Promise.all(
                    chaves.map(async (ch) => {
                        const imc = SyncStorage.get(ch);
                        return imc;
                    })
                );
                setHistorico(historicoData);
            } catch (error) {
                console.error('Erro ao recuperar dados:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Histórico</Text>
            {historico.map( atual => {
                return (
                    <View style={styles.cardContainer} key={atual.data}>
                        <Text>Data: {new Date().toLocaleDateString()}</Text>
                        <Text>Peso: {atual.peso}</Text>
                        <Text>Altura: {atual.altura}</Text>
                        <Text>IMC: {atual.imc}</Text>
                    </View>
                )
            })}
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
           <PilhaTelas.Screen
                name="TelaHistorico"
                component={TelaHistorico}
                options={{title:"Histórico"}}
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
  cardContainer: { 
    width: '90%',
    borderWidth: 1,
    borderColor: '#d5d5d5',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
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