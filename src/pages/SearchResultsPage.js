import React, { useState,useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import omdb from '../api/omdb';

const SearchResultsPage = () => {
  const [term, setTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const response = await omdb.get('/', {
        params: {
          apiKey: 'ab645547',
          s: searchTerm 
        }
      });
      setResults(response.data.Search);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('sagar');
  }, []);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <View><Text>Movie list goes here</Text></View>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchResultsPage;
