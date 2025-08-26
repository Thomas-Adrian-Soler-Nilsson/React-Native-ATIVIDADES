import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
 
export default function App() {
  const [imagem, setImagem] = useState(require('./src/1.png'));
  const [imagem2, setImagem2] = useState(require('./src/3.png')); 
  const [imagem3, setImagem3] = useState(require('./src/5.png')); 

  function mudarImagem3() {
    if (imagem3 === require('./src/5.png')) {
      setImagem3(require('./src/6.png'));
    } else {
      setImagem3(require('./src/5.png'));
    }
  }

  function mudarImagem2() {
    if (imagem2 === require('./src/3.png')) {
      setImagem2(require('./src/4.png'));
    } else {
      setImagem2(require('./src/3.png'));
    }
  }

  function mudarImagem() {
    if (imagem === require('./src/1.png')) {
      setImagem(require('./src/2.png'));
    } else {
      setImagem(require('./src/1.png'));
    }
  }
 
  return (
    <View style={styles.principal}>
      <View style={styles.container1}>
        <Text style={styles.texto}>Exemplo de View</Text>
        <View style={styles.caixa1}>
          <TextInput placeholder='Digite seu nome' />
        </View>
        <Button title='Mudar Imagem' onPress={mudarImagem} />
        <Button title='Mudar Imagem 3' onPress={mudarImagem2} />
        <Button title='Mudar Imagem 5' onPress={mudarImagem3} />
      </View>
 
      <View style={styles.container2}>
        <Image source={imagem} style={styles.img} />
        <Image source={imagem2} style={styles.img} />
        <Image source={imagem3} style={styles.img} />

      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  principal:{
    flex: 1,
 },
  container1: {
    flex: 1,
    backgroundColor: '#f00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
  caixa1:{
    height: 50,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 10,
  },
  img: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
  },
});