import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import Header from '@/components/header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground 
        source={require('@/assets/fonts/exam-bg.png')} // Make sure to update the path based on your project structure
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Header title="home" />
        <View style={styles.container}>
          <View style={styles.row}>
            <Link href="/studymaterial" style={styles.card}>
              <Ionicons name="book-outline" size={32} color="black" /> {/* Icon for Study Materials */}
              <Text style={styles.cardTitle}>Study Materials</Text>
            </Link>
            <Link href="/papers" style={styles.card}>
              <Ionicons name="document-text-outline" size={32} color="black" /> {/* Icon for Past Papers */}
              <Text style={styles.cardTitle}>Past Papers</Text>
            </Link>
          </View>
          <View style={styles.row}>
            <Link href="/mocktests" style={styles.card}>
              <Ionicons name="checkmark-done-outline" size={32} color="black" /> {/* Icon for Mock Tests */}
              <Text style={styles.cardTitle}>Mock Tests</Text>
            </Link>
            <Link href="/settings" style={styles.card}>
              <Ionicons name="settings-outline" size={32} color="black" /> {/* Icon for Settings */}
              <Text style={styles.cardTitle}>Settings</Text>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10, // Add margin to separate text from icon
  },
});
