import React, { Component } from 'react';
import CartIcon from './cart.svg';
import { NavLink } from 'react-router-dom';
import './CartLink.css';

class CartLink extends Component {
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
                <NavLink className="cart__link" to={"/cart"}>
                    <span className="cart__item">{item} items</span>
                    <span className="cart__item">/</span>
                    <span className="cart__item cart__item--price">{price}$</span>
                    <img src={CartIcon} className="cart__icon"/>
                </NavLink>
            </div>
        )
    }
}

export default CartLink;