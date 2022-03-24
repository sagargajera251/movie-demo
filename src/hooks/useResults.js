import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getMovieData} from '../../actions'
import omdb from '../api/omdb';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const state = useSelector(state => state)

  const searchApi = async searchTerm => {
    try {
      const response = await omdb.get('/', {
        params: {
          apiKey: 'ab645547',
          s: searchTerm 
        }
      });
      //setResults(response.data.Search);
      dispatch(getMovieData(response.data.Search));
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('sagar');
  }, []);

  //return [searchApi, results, errorMessage];
  return [searchApi, state, errorMessage];
};
