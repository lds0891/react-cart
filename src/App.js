import React, { Component } from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bags from "./components/Bags";
import 'normalize.css';
import './App.css';
import BagsFunc from './components/BagsFunc'
import CounterFunc from './components/CounterFunc/CounterFunc';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={CounterFunc} />
          <Route exact path="/bags" component={Bags} />
          <Route exact path="/shoes" component={BagsFunc} />
        </div>
      </Router>
    );
  }
}

export default App;