import React, { Component } from 'react';
import Counter from './components/Counter';
import CounterFunc from './components/CounterFunc';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Counter/>
        <CounterFunc/>
      </div>
    );
  }
}

export default App;