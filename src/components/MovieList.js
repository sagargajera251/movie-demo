import React from 'react';
import {
  View,
  StyleSheet, Text
} from 'react-native';

const MovieList = () => {
  return (
    <View style={styles.container}>
      <Text>Movie ListItem</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 15
  }
});

export default MovieList;
