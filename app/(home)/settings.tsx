import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
  const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Ionicons name="moon-outline" size={24} color="black" />
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

      <View style={styles.settingItem}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={toggleNotifications} />
      </View>

      <TouchableOpacity style={styles.settingItem}>
        <Ionicons name="language-outline" size={24} color="black" />
        <Text style={styles.settingText}>Language</Text>
        {/* You can open a modal or navigate to a new screen for language selection */}
      </TouchableOpacity>

      {/* Link to About Screen */}
      <Link href="/about" style={styles.settingItem}>
        <Ionicons name="information-circle-outline" size={24} color="black" />
        <Text style={styles.settingText}>About</Text>
      </Link>

      {/* Link to Privacy Policy Screen */}
      <Link href="/PrivacyPolicy" style={styles.settingItem}>
        <Ionicons name="lock-closed-outline" size={24} color="black" />
        <Text style={styles.settingText}>Privacy Policy</Text>
      </Link>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
});
