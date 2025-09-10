import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
 
export default function App() {
  const [imagem, setImagem] = useState(require('./src/1.png'));
  const [imagem2, setImagem2] = useState(require('./src/3.png')); 
  const [imagem3, setImagem3] = useState(require('./src/5.png'));   
  const [imagem4, setImagem4] = useState(require('./src/7.jpg')); 


  function mudarImagem4() {
    if (imagem4 === require('./src/7.jpg')) {
      setImagem4(require('./src/8.jpg'));
    } else {
      setImagem4(require('./src/7.jpg'));
    }
  }

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
        <TouchableOpacity style={styles.button} onPress={mudarImagem}><text> Mudar Imagem 1 </text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mudarImagem2}><text> Mudar Imagem 3 </text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mudarImagem3}><text> Mudar Imagem 5 </text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={mudarImagem4}><text> Mudar Imagem 7 </text></TouchableOpacity>
      </View>
 
      <View style={styles.container2}>
        <Image source={imagem} style={styles.img} />
        <Image source={imagem2} style={styles.img} />
        <Image source={imagem3} style={styles.img} />
        <Image source={imagem4} style={styles.img} />

      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  principal:{
    flex: 1,
 },
  container1: {
    relative: 1,
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
  button: {
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    fontFamily: 'Roboto',
    marginBottom: 10, 
  },
});