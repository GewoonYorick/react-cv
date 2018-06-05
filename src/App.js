import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/ui/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="pageContainer">
          foo bar baz
        </div>

      </div>
    );
  }
}

export default App;