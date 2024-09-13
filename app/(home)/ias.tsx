import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const questionPapers = [
  { year: '2014-2024', url: 'https://vajiramandravi.com/upsc-previous-papers/', title: 'all  Question Papers' },
 
];

const GroupScreen = () => {

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  const renderYearItem = ({ item }: { item: { year: string, url: string, title: string } }) => (
    <TouchableOpacity style={styles.yearButton} onPress={() => handlePress(item.url)}>
      <View style={styles.yearContent}>
        <Text style={styles.yearText}>{item.year}</Text>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={questionPapers}
        keyExtractor={(item) => item.year}
        renderItem={renderYearItem}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // White background color
  },
  listContainer: {
    padding: 20,
  },
  yearButton: {
    backgroundColor: '#f8f9fa', // Light gray for contrast against white background
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2, // Subtle shadow for depth
    borderColor: '#ddd', // Light border for separation
    borderWidth: 1,
  },
  yearContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearText: {
    color: '#333', // Dark text color for readability
    fontSize: 18,
    fontWeight: 'bold',
  },
  titleText: {
    color: '#666', // Slightly lighter color for the title
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default GroupScreen;
