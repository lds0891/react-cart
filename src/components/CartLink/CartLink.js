import React from 'react';
import CartIcon from './cart.svg';
import { NavLink } from 'react-router-dom';
import { useStoreon } from 'storeon/react';
import './CartLink.css';

const CartLink = () => {
    const { cart } = useStoreon('cart');
    let calcSumPriceCart = 0;

    const countItemInCart = cart.length;

    cart.forEach((item) => {
        calcSumPriceCart = calcSumPriceCart + item.price;
    });


    return (
        <div className="cart-link">
            <NavLink className="cart-link__link" to={"/cart"}>
                <span className="cart-link__item">{countItemInCart} items</span>
                <span className="cart-link__item">/</span>
                <span className="cart-link__item cart-link__item--price">{calcSumPriceCart}$</span>
                <img src={CartIcon} className="cart-link__icon" alt=""/>
            </NavLink>
        </div>
    )
}

export default CartLink;