import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Person = {
  name: 'Noel Caceres'
}

let getName = () => {
  return Person.name ? <h1>Name: {Person.name}</h1> : 
    <h1>Name: Unknown</h1>
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {getName()}
      </div>
    );
  }
}

export default App;
