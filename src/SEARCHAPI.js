import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const SearchProducts = () => {
  // State variables to hold search filters and results
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState("");
  const [products, setProducts] = useState([]);

  // Function to perform the search
  const searchProducts = async () => {
    try {
      const response = await axios.post(
        "https://example.com/api/search-products",
        {
          category,
          minPrice,
          maxPrice,
          rating,
        }
      );
      setProducts(response.data.products); // Assuming API returns a list of products
    } catch (error) {
      console.log("Error fetching products:", error?.response?.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Products</Text>

      {/* Input fields for search filters */}
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={category}
        onChangeText={setCategory}
      />
      <TextInput
        style={styles.input}
        placeholder="Min Price"
        value={minPrice}
        onChangeText={setMinPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Max Price"
        value={maxPrice}
        onChangeText={setMaxPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Rating"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />

      {/* Search button */}
      <Button title="Search" onPress={searchProducts} />

      {/* Display search results */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Text>{item.name}</Text>
            <Text>{`Price: $${item.price}`}</Text>
            <Text>{`Rating: ${item.rating} stars`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
  },
  productCard: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    marginTop: 10,
    width: "80%",
    borderRadius: 5,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});

export default SearchProducts;
