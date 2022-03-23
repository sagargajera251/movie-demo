import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation';

const MovieList = ({ results, navigation }) => {
  if (!results.length) {
    return null;
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
              <Text>Movie Item goes here</Text>
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
  }
});

export default withNavigation(MovieList);
