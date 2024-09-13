import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Example data for group3
const items = [
  { id: '1', title: 'question paper', url: 'https://drive.google.com/file/d/1JZrCrMNLo2IYHRdilgq5xRgqNgmXTBYX/view?usp=sharing' },
];

// Data for the qualifying marks table
const qualifyingMarks = [
  { category: 'General', marks: '40%' },
  { category: 'OBC', marks: '35%' },
  { category: 'SC', marks: '30%' },
  { category: 'ST', marks: '30%' },
];

const Group3Screen = () => {

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  const renderItem = ({ item }: { item: { id: string, title: string, url: string } }) => (
    <TouchableOpacity style={styles.itemButton} onPress={() => handlePress(item.url)}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderTableItem = ({ item }: { item: { category: string, marks: string } }) => (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{item.category}</Text>
      <Text style={styles.tableCell}>{item.marks}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.comingSoonContainer}>
        <Text style={styles.comingSoonText}>More content coming soon!</Text>
      </View>
      <View style={styles.tableWrapper}>
        <Text style={styles.tableHeader}>Qualifying Marks</Text>
        <View style={styles.tableContainer}>
          <FlatList
            data={qualifyingMarks}
            keyExtractor={(item) => item.category}
            renderItem={renderTableItem}
            contentContainerStyle={styles.tableContent}
          />
        </View>
      </View>
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
  itemButton: {
    backgroundColor: '#f8f9fa', // Light gray for contrast against white background
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2, // Subtle shadow for depth
    borderColor: '#ddd', // Light border for separation
    borderWidth: 1,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitle: {
    color: '#333', // Dark text color for readability
    fontSize: 18,
    fontWeight: 'bold',
  },
  comingSoonContainer: {
    alignItems: 'center',
    padding: 20,
  },
  comingSoonText: {
    color: '#999', // Light gray to indicate a placeholder
    fontSize: 16,
    fontStyle: 'italic',
  },
  tableWrapper: {
    marginTop: 20,
    alignItems: 'center', // Center the table horizontally
    paddingHorizontal: 20,
  },
  tableContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2, // Shadow for depth
    overflow: 'hidden', // Clip the shadow
  },
  tableHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#333',
  },
  tableContent: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingHorizontal: 20,
  },
  tableCell: {
    fontSize: 16,
    color: '#333',
  },
});

export default Group3Screen;
