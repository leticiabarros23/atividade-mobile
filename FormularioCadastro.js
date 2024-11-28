import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Header from './Header'; 

const FormularioCadastro = () => {
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [tempoPreparo, setTempoPreparo] = useState('');

  const handleCadastro = () => {
    if (!nome || !ingredientes || !tempoPreparo) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Cadastro Realizado', `Nome: ${nome}\nIngredientes: ${ingredientes}\nTempo: ${tempoPreparo}`);
  };

  return (
    <ImageBackground
      source={require('./assets/img-pc.png')} 
      style={styles.background}
    >
      <View style={styles.formContainer}>
        <Header />
        
        <Text style={styles.label}>Nome da Receita:</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite o nome da receita"
        />

        <Text style={styles.label}>Ingredientes:</Text>
        <TextInput
          style={styles.input}
          value={ingredientes}
          onChangeText={setIngredientes}
          placeholder="Digite os ingredientes"
        />

        <Text style={styles.label}>Tempo de Preparo (min):</Text>
        <TextInput
          style={styles.input}
          value={tempoPreparo}
          onChangeText={setTempoPreparo}
          placeholder="Digite o tempo de preparo"
          keyboardType="numeric"
        />

        {/* Substituí o Button pelo TouchableOpacity */}
        <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center', // Centraliza o conteúdo dentro da caixa branca
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start', // Alinha o texto do label à esquerda
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  botao: {
    backgroundColor: '#000', // Cor preta do botão
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Centraliza o texto no botão
    justifyContent: 'center',
    marginTop: 20, // Espaçamento superior
    width: '100%', // Botão ocupando toda a largura
  },
  textoBotao: {
    color: '#fff', // Texto branco
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FormularioCadastro;
