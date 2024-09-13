import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function PreparingTestsScreen() {
  const bounceAnim1 = useRef(new Animated.Value(0)).current;
  const bounceAnim2 = useRef(new Animated.Value(0)).current;
  const bounceAnim3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startBouncing();
  }, []);

  const startBouncing = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnim1, {
          toValue: -10,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim1, {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim2, {
          toValue: -10,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim2, {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim3, {
          toValue: -10,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnim3, {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tests are preparing soon...</Text>
      <View style={styles.dotContainer}>
        <Animated.View style={[styles.dot, { transform: [{ translateY: bounceAnim1 }] }]} />
        <Animated.View style={[styles.dot, { transform: [{ translateY: bounceAnim2 }] }]} />
        <Animated.View style={[styles.dot, { transform: [{ translateY: bounceAnim3 }] }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#333',
    marginHorizontal: 5,
  },
});
