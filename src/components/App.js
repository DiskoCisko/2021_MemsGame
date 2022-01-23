import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import MainContainer from './Main/MainContainer';
import { store } from '../reduxe/index';
import '../styles/App.css';

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    );
  }
}

export default App;
