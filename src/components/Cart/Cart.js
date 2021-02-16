import React, { useState } from 'react';
import { useStoreon } from 'storeon/react'
import './Cart.css';
import CartCard from '../CartCard';

const Cart = (props) => {
    const { cart } = useStoreon('cart');
    let priceCartAll = 0;

    const shoppingCart = cart.map((u, i) =>
            <CartCard
                img={u.img}
                name={u.name}
                price={u.price}
                id={u.id}
                currency={u.currency}
                key={`${u.name} - ${i}`}
            />
    );

    cart.forEach((item) => {
        priceCartAll = priceCartAll + item.price;
    });

    return (
        <div className="cart container-page">
            <div className="container">
                <h1 className="cart__title">Cart</h1>
                <table className="cart-form">
                    <thead className="cart-form__header">
                        <tr className="cart-form__row">
                            <th className="cart-form__col">
                                <h2 className="cart-form__title">Product</h2>
                            </th>
                            <th className="cart-form__col">
                                <h2 className="cart-form__title">Price</h2>
                            </th>
                            <th className="cart-form__col">
                                <h2 className="cart-form__title">Quantity</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="cart-form__content">
                        {shoppingCart}
                    </tbody>
                </table>
                <div className="cart__total">
                    <span className="cart__total-header">Total:</span>
                    <span className="cart__total-price">{priceCartAll}$</span>
                </div>
                <button className="btn__all btn__all--cart">CHECKOUT</button>
            </div>
        </div>
    )

}

export default Cart;