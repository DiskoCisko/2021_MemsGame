
import React, { Component } from "react";
import Card from './Card.js'

import '../styles/App.css';

class App extends Component {

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 0));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    render() {
        return (
            <div>
                <Card
                    title="1"
                    shuffleArray={this.shuffleArray}
                />
            </div>
        );
    }
}

export default App;