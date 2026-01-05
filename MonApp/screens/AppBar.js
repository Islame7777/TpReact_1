import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { AuthContext } from "../context/AuthContext"; 

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>OUH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBar: {
    height: 60,
    backgroundColor: '#1E3A8A', // Bleu Foncé Primaire
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6, // Ombre plus marquée
    borderBottomWidth: 1,
    borderBottomColor: '#F8E9EB', // Rose Pâle en bas
  },
  title: {
    color: '#FFFFFF', // Texte Blanc sur fond bleu foncé
    fontSize: 20,
    fontWeight: '700',
  },
});