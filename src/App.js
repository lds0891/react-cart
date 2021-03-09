import React from 'react';
import Header from "./components/Header";
import { Switch, Route } from 'react-router-dom';
import 'normalize.css';
import './App.css';
import Products from './components/Products'
import Cart from './components/Cart'
import back from './back'

const App = () => {

  const bagsFilter = back.filter(item => item.type === 'bag');

  const shoesFilter = back.filter(item => item.type === 'shoe');

  const hatsFilter = back.filter(item => item.type === 'hat');

  const productsAllRandom = back.sort(() => {
    return Math.random() - 0.5;
  });

    return (
    <Switch>
      <div className="app">
        <Header
          back={back}
        />
        <Route exact path="/"
          render={ () => <Products back={productsAllRandom} title="Products"/> }
        />
        <Route path="/bags"
          render={ () => <Products back={bagsFilter} title="Bags"/> }
        />
        <Route path="/shoes"
          render={ () => <Products back={shoesFilter} title="Shoes"/> }
        />
        <Route path="/hats"
          render={ () => <Products back={hatsFilter} title="Hats"/> }
        />
        <Route path="/cart"
          render={ () => <Cart back={back}/> }
        />
      </div>
    </Switch>
  );
}

export default App;