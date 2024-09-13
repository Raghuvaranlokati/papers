import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function NotFoundScreen() {
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startFloating();
  }, []);

  const startFloating = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -10,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 10,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404</Text>
      <Text style={styles.message}>Oops! Page Not Found</Text>
      <Animated.View style={[styles.floatingBox, { transform: [{ translateY: floatAnim }] }]}>
        <Text style={styles.boxText}>🚀</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  message: {
    fontSize: 20,
    color: '#666',
    marginBottom: 50,
  },
  floatingBox: {
    width: 80,
    height: 80,
    backgroundColor: '#ffcc00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  boxText: {
    fontSize: 40,
  },
});
