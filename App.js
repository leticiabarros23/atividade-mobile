import React from 'react';
import { SafeAreaView, StyleSheet, Image } from 'react-native';
import Header from './Header';
import FormularioCadastro from './FormularioCadastro';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FormularioCadastro />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

export default App;