import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Image,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PRODUCTS = [
  {
    id: 1,
    name: 'Spider Plant',
    image: '../assets/plant1.png',
    price: '250.000đ',
    quantity: 156
  },
  {
    id: 2,
    name: 'Song of India',
    image: '../assets/plant2.png',
    price: '320.000đ',
    quantity: 84
  }
];

export default function SearchScreen({ navigation }) {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState(['Spider Plant', 'Song of India']);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    const keyword = text.trim().toLowerCase();
    if (keyword.length === 0) return;

    const results = PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(keyword)
    );

    setSearchResults(results);

    if (!searchHistory.includes(text)) {
      setSearchHistory([text, ...searchHistory]);
    }
  };

  const handleRecentSearch = (keyword) => {
    setSearchText(keyword);
    handleSearch(keyword);
  };

  const clearSearch = () => {
    setSearchText('');
    setSearchResults([]);
    Keyboard.dismiss();
  };

  const removeHistoryItem = (item) => {
    setSearchHistory(searchHistory.filter(i => i !== item));
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <Text style={styles.productQuantity}>Còn {item.quantity} sp</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={clearSearch}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>TÌM KIẾM</Text>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Tìm kiếm"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={() => handleSearch(searchText)}
        />
        <TouchableOpacity onPress={() => handleSearch(searchText)}>
          <Icon name="search" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {searchResults.length > 0 ? (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
        />
      ) : (
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>Tìm kiếm gần đây</Text>
          {searchHistory.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <TouchableOpacity onPress={() => handleRecentSearch(item)} style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Icon name="time-outline" size={18} color="gray" style={{ marginRight: 8 }} />
                <Text>{item}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeHistoryItem(item)}>
                <Icon name="close" size={18} color="gray" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 6,
    marginBottom: 16
  },
  input: {
    flex: 1,
    fontSize: 16
  },
  historyContainer: {
    paddingVertical: 8
  },
  historyTitle: {
    fontWeight: 'bold',
    marginBottom: 8
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12
  },
  productName: {
    fontWeight: 'bold'
  },
  productPrice: {
    color: '#333'
  },
  productQuantity: {
    color: 'gray'
  }
});