import { useEffect, useState } from 'react';
import omdb from '../api/omdb';

export default () => {
  const [results, setResults] = useState([]);
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

  return [searchApi, results, errorMessage];
};
