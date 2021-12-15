
import React, { Component } from "react";
import MainContainer from './Main/MainContainer.js';
import { Provider } from 'react-redux';
import {store} from './../reduxe/index';
import '../styles/App.css';

class App extends Component {

    // shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 0));
    //         let temp = array[i];
    //         array[i] = array[j];
    //         array[j] = temp;
    //     }
    //     return array
    // }
    render() {
        return (
            <Provider store={store}>
                <MainContainer />
            </Provider>
            
        );
    }
}



export default App;