import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import omdb from '../api/omdb';

const MovieDetailsPage = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await omdb.get('/', {
      params: {
        apiKey: 'ab645547',
        i: `${id}`
      }
    });
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.Title}</Text>
      {result?.Poster !== "N/A" ? <Image style={styles.image} source={{ uri: result.Poster }}/> : null }
      <Text>
        {result.imdbRating} Stars, Released in {result.Year}
      </Text>
      <Text>
        Country : {result.Country}
      </Text>
      <Text>
        Director : {result.Director}
      </Text>
      <Text>
        Genre : {result.Genre}
      </Text>
      <Text>
        Language : {result.Language}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '0',
    marginLeft: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  image: {
    height: 200,
    width: 300
  }
});

export default MovieDetailsPage;
