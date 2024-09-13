import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        We take your privacy seriously. This privacy policy explains how we collect, use, and protect your information when you use our app.
      </Text>
      <Text style={styles.subtitle}>Information Collection</Text>
      <Text style={styles.text}>
        We may collect information such as your name, email address, and other personal data when you use our services.
      </Text>
      <Text style={styles.subtitle}>Data Usage</Text>
      <Text style={styles.text}>
        We use your data to improve the app experience, provide personalized content, and communicate with you about updates or services.
      </Text>
      <Text style={styles.subtitle}>Data Protection</Text>
      <Text style={styles.text}>
        We implement strong security measures to protect your data from unauthorized access and ensure its confidentiality.
      </Text>
      <Text style={styles.subtitle}>Third-Party Services</Text>
      <Text style={styles.text}>
        We may use third-party services such as analytics tools that help us understand how the app is used.
      </Text>
      <Text style={styles.subtitle}>Changes to Policy</Text>
      <Text style={styles.text}>
        This privacy policy may be updated from time to time. We will notify you of any changes by posting the new policy in the app.
      </Text>
      <Text style={styles.footer}>If you have any questions about this privacy policy, feel free to contact us.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'justify',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
