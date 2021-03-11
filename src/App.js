import React from 'react';
import Header from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'

const App = () => {

    return (
    <Switch>
      <div className="app">
        <Header/>
        <Route exact path="/"
          render={ () => <Products type="all" title="Products"/> }
        />
        <Route path="/bags"
          render={ () => <Products type="bag" title="Bags"/> }
        />
        <Route path="/shoes"
          render={ () => <Products type="shoe" title="Shoes"/> }
        />
        <Route path="/hats"
          render={ () => <Products type="hat" title="Hats"/> }
        />
        <Route path="/cart"
          render={() => <Cart/> }
        />
      </div>
    </Switch>
  );
}

export default App;