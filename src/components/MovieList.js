import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import MovieItem from './MovieItem';
import { withNavigation } from 'react-navigation';

const MovieList = ({ results, navigation }) => {
  if (!results || !results.length) {
    return (
        <View style={styles.noresult}>
            <Text>No movies found with given search term</Text>
        </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        keyExtractor={result => result.imdbID}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.imdbID })
              }
            >
              <MovieItem result={item} /><br/>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  },
  noresult: {
    marginLeft: 15
  }

});

export default withNavigation(MovieList);
