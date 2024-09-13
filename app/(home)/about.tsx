import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Ionicons name="information-circle-outline" size={60} color="#005b99" style={styles.icon} />
      
      <Text style={styles.info}>
        This app is designed to provide users with access to past question papers, mock tests, and study materials for various exams. 
        We aim to help students and aspirants prepare effectively.
      </Text>

      <Text style={styles.subTitle}>Version</Text>
      <Text style={styles.text}>1.0.0</Text>

      <Text style={styles.subTitle}>Developed by</Text>
      <Text style={styles.text}>Fogo Team</Text>

      <Text style={styles.subTitle}>Contact</Text>
      <Text style={styles.text}>zetafogo@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});
