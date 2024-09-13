import { Link } from 'expo-router';
import { View, Text, StyleSheet , } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
      <Link href={'/'}>home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
