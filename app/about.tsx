import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.description}>
        Welcome to our app! We aim to provide users with the best experience for accessing educational materials, past papers, mock tests, and more.
      </Text>
      <Text style={styles.subtitle}>Version</Text>
      <Text style={styles.text}>1.0.0</Text>

      <Text style={styles.subtitle}>Developers</Text>
      <Text style={styles.text}>Raghuvaran and Team</Text>
      
      <Text style={styles.footer}>Thank you for using our app!</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  footer: {
    marginTop: 40,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
