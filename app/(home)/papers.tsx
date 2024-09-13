import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Papers() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Link href="/group1" style={styles.card}>
          <Text style={styles.cardTitle}>Group 1</Text>
        </Link>
        <Link href="/group2" style={styles.card}>
          <Text style={styles.cardTitle}>Group 2</Text>
        </Link>
        <Link href="/group3" style={styles.card}>
          <Text style={styles.cardTitle}>Group 3</Text>
        </Link>
        <Link href="/group4" style={styles.card}>
          <Text style={styles.cardTitle}>Group 4</Text>
        </Link>
        <Link href="/ias" style={styles.card}>
          <Text style={styles.cardTitle}>Civils/IAS</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    marginTop: 60,  // Adjust this based on the height of the header
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    paddingHorizontal: 15,  // Ensure padding on sides
  },
  card: {
    width: '100%',
    maxWidth: 300,
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#e0e0e0', // Slightly darker grey for card background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
