import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchResultsPage from './src/pages/SearchResultsPage'; 
import MovieDetailsPage from './src/pages/MovieDetailsPage';

const navigator = createStackNavigator(
    {
      Search: SearchResultsPage,
      ResultsShow: MovieDetailsPage
    },
    {
      initialRouteName: 'Search',   
      defaultNavigationOptions: {
        title: 'Movie Search' 
      }
    }
  );

const Container = createAppContainer(navigator);

export default Container; 