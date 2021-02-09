import React, { Component } from 'react';
import 'normalize.css';
import Header from "./components/Header";
import Bags from "./components/Bags";
// import Counter from './components/Counter';
// import CounterFunc from './components/CounterFunc';

import './App.css';
import './styles/variable.css';
import './styles/fonts.css';
import './styles/base.css';

class App extends Component {

  render() {

    return (
      <div className="App">
          <Header/>
          <Bags/>
        {/* <Counter/> */}
        {/* <CounterFunc/> */}

      </div>
    );
  }
}

export default App;