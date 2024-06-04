import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, FlatList } from 'react-native';

const PilhaTelas = createNativeStackNavigator()

function PrimeiraTela( {navigation} ){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Primeira Tela</Text>
            <Button
                title='Ir para a outra tela'
                color="red"
                onPress={()=>navigation.navigate('SegundaTela')}
            />
            <Button
                title='Escolher pessoa'
                color="red"
                onPress={()=>navigation.navigate('TelaEscolherPessoa')}
            />
        </View>
    )
}

function SegundaTela( {navigation} ){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Segunda Tela</Text>
            <Button
                title='Voltar para o inicio'
                color="red"
                onPress={()=>navigation.navigate('PrimeiraTela')}
            />
            <Button
                title='Voltar'
                color="red"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

function TelaEscolherPessoa( {navigation} ){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha uma pessoa</Text>
            <Button
                title='Tiago'
                color="black"
                onPress={()=>navigation.navigate('TelaPessoa',{
                    nome:"Tiago",
                    descricao: "Professor da matéria"
                })}
            />
            <Button
                title='Caio'
                color="black"
                onPress={()=>navigation.navigate('TelaPessoa',{
                    nome:"Caio",
                    descricao: "Aluno e líder da turma"
                })}
            />
        </View>
    )
}

function TelaPessoa( {route, navigation} ){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{route.params.nome}</Text>
            <Text>{route.params.descricao}</Text>
            <Button
                title='Voltar para o inicio'
                color="red"
                onPress={()=>navigation.navigate('PrimeiraTela')}
            />
            <Button
                title='Voltar'
                color="red"
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}

export default function App() {
  
  return (
    <NavigationContainer>
        <PilhaTelas.Navigator initialRouteName='PrimeiraTela'>
            <PilhaTelas.Screen
                name="PrimeiraTela"
                component={PrimeiraTela}
                options={{
                    title:"Tela inicial",
                    headerStyle:{
                        backgroundColor:'blue'
                    },
                    headerTintColor:"white",
                    headerRight:()=>(
                        <Button
                            title="Pessoas"
                            color='black'
                            onPress={()=>alert("teste")}/>
                    )
                }}
            />
            <PilhaTelas.Screen
                name="SegundaTela"
                component={SegundaTela}
                options={{title:"Outra tela"}}
            />
            <PilhaTelas.Screen
                name="TelaEscolherPessoa"
                component={TelaEscolherPessoa}
                options={{title:"Escolher Pessoa"}}
            />
            <PilhaTelas.Screen
                name="TelaPessoa"
                component={TelaPessoa}
                options={{title:"Pessoa"}}
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
  }
});