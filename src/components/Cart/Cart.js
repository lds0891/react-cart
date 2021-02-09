import React, { Component } from 'react';
import CartIcon from './cart.svg';
import './Cart.css';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: 1,
            price: 100,
        };
    }


    render () {
        const {item, price} = this.state;

        return (
            <div className="cart">
                <a className="cart__link" href="#">
                    <span className="cart__item">{item} items</span>
                    <span className="cart__item">/</span>
                    <span className="cart__item cart__item--price">{price}$</span>
                    <img src={CartIcon} className="cart__icon"/>
                </a>
            </div>
        )
    }
}

export default Cart;