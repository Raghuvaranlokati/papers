import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Linking, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const items = [
  { year: '2023', url: 'https://drive.google.com/file/d/1nY-EzaGSqI8HsGU7z2Jlcoe9eJqRr5AB/view?usp=sharing', title: 'General-knowledge paper' },
  { year: '2023', url: 'https://drive.google.com/file/d/1VOWbzSQgGSqxGEquxLBjhRZTsURShh9l/view?usp=sharing', title: 'Secretarial-Ability-Question-Paper' },
  { year: '2018', url: 'https://drive.google.com/file/d/14DNvW0wMLTo94RHNB_qhUuJfKNFUVI0x/view?usp=sharing', title: 'General-knowledge paper' },
  { year: '2018', url: 'https://drive.google.com/file/d/1Xt-8zCL2lnfA2TklimnYmJxEExQSHWVY/view?usp=sharing', title: 'Secretarial-Ability-Question-Paper' },
];

const Group4Screen = () => {

  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL:', err));
  };

  const renderItem = ({ item }: { item: { year: string, url: string, title: string } }) => (
    <TouchableOpacity style={styles.itemButton} onPress={() => handlePress(item.url)}>
      <View style={styles.itemContent}>
        <Text style={styles.yearText}>{item.year}</Text>
        <Text style={styles.titleText}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => `${item.year}-${item.title}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />} // Adding a separator
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
  itemButton: {
    backgroundColor: '#e9ecef', // Light gray for contrast against white background
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3, // Subtle shadow for depth
    borderColor: '#ccc', // Light border for separation
    borderWidth: 1,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearText: {
    color: '#212529', // Dark text color for readability
    fontSize: 18,
    fontWeight: '600', // Slightly less bold than previous example
  },
  titleText: {
    color: '#495057', // Medium gray for the title
    fontSize: 16,
    fontStyle: 'italic',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0', // Light gray separator
    marginVertical: 8,
  },
});

export default Group4Screen;
