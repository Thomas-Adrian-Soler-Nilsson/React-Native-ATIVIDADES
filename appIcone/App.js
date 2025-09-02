import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'; 

export default function App() {

  const mostrarMsg = () => {
    alert('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <FontAwesome name="rocket" size={30} color="#900" />
      <Feather name="meh" size={30} color="#009" />

      <TouchableOpacity style={styles.btn} onPress = {mostrarMsg}>
      <Feather name="cpu" size={30} color="#199999" />
        <Text style={styles.btnTexto}>Pressione aqui</Text>
      </TouchableOpacity>
      
      <Text>My style text</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    backgroundColor: '#000',
    padding: 10,
    margin: 20,
    bordeRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderBottomEndRadius: 30,
    borderTopStartRadius: 15,
  },
  btnTexto:{
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  }
});
