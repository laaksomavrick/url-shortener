import React, { Component } from 'react';
import Shortener from '../shortener/Shortener'
import './App.css';

class App extends Component {

    //todo router to redir

    render() {
        return (
            <div className="container">
                <Shortener/>
            </div>
        )
    }


}

export default App;
