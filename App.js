import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import Container from './Container';

const App = () => {

    const store = createStore(reducers);

    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
}

export default App;