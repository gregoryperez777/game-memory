import React, { Component } from 'react';
import Board from './Board';
import Header from './Header';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Board />
      </div> 
    );
  }
}

export default App;
