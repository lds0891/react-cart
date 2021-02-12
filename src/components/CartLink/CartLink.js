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
            <div className="cart-link">
                <NavLink className="cart-link__link" to={"/cart"}>
                    <span className="cart-link__item">{item} items</span>
                    <span className="cart-link__item">/</span>
                    <span className="cart-link__item cart-link__item--price">{price}$</span>
                    <img src={CartIcon} className="cart-link__icon"/>
                </NavLink>
            </div>
        )
    }
}

export default CartLink;