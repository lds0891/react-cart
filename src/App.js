import React, { Component } from 'react';
import Header from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import Bags from "./components/Bags";
import 'normalize.css';
import './App.css';
import BagsFunc from './components/BagsFunc'
import Cart from './components/Cart'
import CounterFunc from './components/CounterFunc';

class App extends Component {

  render() {

    return (
      <Switch>
        <div className="App">
          <Header/>
          <Route exact path="/" component={CounterFunc} />
          <Route exact path="/bags" component={Bags} />
          <Route exact path="/shoes" component={BagsFunc} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </Switch>
    );
  }
}

export default App;