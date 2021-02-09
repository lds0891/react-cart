import React, { Component } from 'react';
import 'normalize.css';
// import Counter from './components/Counter';
// import CounterFunc from './components/CounterFunc';
import Header from "./components/Header";

import './App.css';
import './styles/variable.css';
import './styles/fonts.css';

class App extends Component {

  render() {
    return (
      <div className="App">
          <Header/>
        {/* <Counter/> */}
        {/* <CounterFunc/> */}

      </div>
    );
  }
}

export default App;