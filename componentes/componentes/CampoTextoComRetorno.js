import { React, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function CampoTextoComRetorno(props){
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <TextInput 
                style={styles.textInput}
                placeholder={props.sugestao}
                keyboardType={props.tipoTeclado}
                onChangeText={(texto) => props.funcao(texto) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '85%',
        alignItems: 'center'
    },
    titulo:{
        fontSize: 20
    },
    textInput: {
      borderWidth: 1,
      paddingLeft: 20,
      paddingRight: 20,
      width:'70%',
      borderColor: 'black',
    }
  });