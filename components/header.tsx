import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <Link href="/notification" style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 0
  },
  container: {
    height: 80,
    backgroundColor: '#000000',
    flexDirection: 'row',
    alignItems: 'center', 

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginLeft: 15,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    bottom: 18, // Adjusts the icon positioning properly
  },
});

export default Header;
