import React, { Component } from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bags from "./components/Bags";
import 'normalize.css';
import './App.css';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/bags" component={Bags} />
        </div>
      </Router>
    );
  }
}

export default App;