import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const questionPapers = [
  {
    year: '2016',
    papers: [
      {
        title: 'Paper-I: General Studies and General Abilities',
        url: 'https://drive.google.com/file/d/1gJE4mQ3nni9-ZEAxZeIv2iRwPMRKcyaA/view?usp=drive_link',
      },
      {
        title: 'Paper-II: History, Polity and Society',
        url: 'https://drive.google.com/file/d/12MvAXNg0C8eqi0Bb-fehU2Wy3y09FsEA/view?usp=sharing',
      },
      {
        title: 'Paper-III: Economy and Development',
        url: 'https://drive.google.com/file/d/1E1NwEfwQDCfx7ktfnkXnofzlRX9zKATN/view?usp=sharing',
      },
      {
        title: 'Paper-IV: Telangana Movement and State Formation',
        url: 'https://drive.google.com/file/d/152i4FdOjTkPKVY-1lGL3NODXzkbpBhUL/view?usp=sharing',
      },
    ],
  },
];

const Group2Screen = () => {
  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  const renderYearItem = ({ item }: { item: { year: string, papers: { title: string, url: string }[] } }) => (
    <View style={styles.paperContainer}>
      <Text style={styles.yearText}>{item.year}</Text>
      {item.papers.map((paper, index) => (
        <TouchableOpacity
          key={index}
          style={styles.paperButton}
          onPress={() => handlePress(paper.url)}
        >
          <Text style={styles.paperText}>{paper.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
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
    backgroundColor: '#fff',
  },
  listContainer: {
    padding: 20,
  },
  paperContainer: {
    marginBottom: 20,
  },
  yearText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paperButton: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  paperText: {
    color: '#666',
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default Group2Screen;
