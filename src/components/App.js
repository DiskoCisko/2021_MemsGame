
import React, { Component } from "react";
import MainContainer from './Main/MainContainer.js';
import { Provider } from 'react-redux';
import {store} from './../reduxe/index';
import '../styles/App.css';

class App extends Component {

    
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
            
        );
    }
}



export default App;