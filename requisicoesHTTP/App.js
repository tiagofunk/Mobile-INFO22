import { Alert, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const PilhaTelas = createNativeStackNavigator()
const URL_API = `https://jsonplaceholder.typicode.com/users`;

function TelaInicial( {route, navigation }){
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    fetch(URL_API).then(resposta => resposta.json())
    .then( json => { setUsers(json) })
    .catch( () => {
      Alert.alert('Erro', 'Não foi possível carregar os dados dos usuarios');
    });
  },[])

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text>Usuários</Text>
      {users.map( us => (
          <View key={us.id} style={styles.cardContainer}>
            <View>
              <Text>Nome: {us.name}</Text>
              <Text>Email: {us.email}</Text>
            </View>
            <Button title="Ver" onPress={()=>{navigation.navigate('VisualizarUsuario',{'id':us.id})}}/>
          </View>
        ))}
    </View>
    </ScrollView>
  )
}

function VisualizarUsuario( {route, navegation }){
  const [ user, setUser ] = useState( {} );

  useEffect(() => {
    fetch(`${URL_API}/${route.params.id}`).then(resposta => resposta.json())
    .then( json => { setUser(json) }).catch( () => {
      Alert.alert('Erro', 'Não foi possível carregar os dados dos usuarios');
    });
  }, [route.params.id])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Visualizar usuário</Text>
        <Text>Nome: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Usuário: {user.username}</Text>
        <Text>Telefone: {user.phone}</Text>
        <Text>Site: {user.website}</Text>
        <Text style={styles.subtitulo}>Endereço</Text>
        <Text>Rua: {user.address?.street}</Text>
        <Text>Casa: {user.address?.suite}</Text>
        <Text>Cidade: {user.address?.city}</Text>
        <Text style={styles.subtitulo}>Empresa</Text>
        <Text>Nome: {user.company?.name}</Text>
        <Text>CP: {user.company?.catchPhrase}</Text>
        <Text>BS: {user.company?.bs}</Text>
    </View>
    </ScrollView>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
        <PilhaTelas.Navigator >
            <PilhaTelas.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={{title:"Tela inicial"}}
            />
            <PilhaTelas.Screen
                name="VisualizarUsuario"
                component={VisualizarUsuario}
                options={{title:"Visualizar usuário"}}
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
    justifyContent: 'center',
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
  titulo:{
    margin: '5%',
    fontSize: 25
  },
  subtitulo:{
    margin: '2%',
    fontSize: 17
  }
});
