import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RocketLeague from './RocketLeague';
import Math from './Math';
import Loop from './Loop';
import Counter from './Counter';



class App extends Component {
  render() {
    return (
      <div>
        <RocketLeague/>
        <Counter/>
        <Math/>
        <Loop/>
      </div>
    );
  }
}

export default App;
