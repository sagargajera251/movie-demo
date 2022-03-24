import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList.js';
import useResults from '../hooks/useResults';

const SearchResultsPage = () => {
  const [term, setTerm] = useState('');
  //const [searchApi, results, errorMessage] = useResults();
  const [searchApi, state, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
         <MovieList
          results={state}
        />
      </ScrollView>
      {/* <ScrollView>
         <MovieList
          results={results}
        />
      </ScrollView> */}
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchResultsPage;
