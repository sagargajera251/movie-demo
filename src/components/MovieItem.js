import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const MovieItem = ({ result }) => {
  return (
    <View style={styles.container}>
      {result?.Poster !== "N/A" ? <Image style={styles.image} source={{ uri: result.Poster }}/> : null }
      <Text style={styles.name}>{result.Title}</Text>
      <Text>
        Released in {result.Year}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginTop: 0
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  }
});

export default MovieItem;
