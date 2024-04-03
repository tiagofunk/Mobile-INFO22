import React from 'react';
import { StyleSheet, Text } from 'react-native';

var corTexto

export default function PrimeiroComponente(props){
    corTexto = props.cor
    return (
        // <Text style={styles.texto,{color:corTexto}}>Msg de {props.pessoa}: {props.texto}</Text>
        <Text style={[styles.texto,{color:corTexto}]}>Msg de {props.pessoa}: {props.texto}</Text>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 20,
      }
  })