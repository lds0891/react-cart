import React, { Component } from 'react';
import './Cart.css';
import CartCard from '../CartCard';
import Bag from "../../assets/img/bag.png";
import back from '../../back';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            back: back,
            totalPrice: 300,
        };
    }


    render () {

        const {totalPrice} = this.state;

        const shoppingCart = this.state.back.map((u, i) =>
            <CartCard
                img={u.img}
                name={u.name}
                price={u.price}
                id={u.id}
                currency={u.currency}
                quantityInCart={u.quantityInCart}
                key={`${u.name} - ${i}`}
            />
        );

        console.log(shoppingCart)
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
                        {/* <CartCard
                            img={Bag}
                            item={'Item'}
                            price={this.state.bags.price}
                            quantity={'1'}
                            quantityInCard={this.state.bags.quantityInCard}
                        />
                        <CartCard
                            img={Bag}
                            item={'Item'}
                            price={'100$'}
                            quantity={'1'}
                            onePrice={'100$ per item'}
                        /> */}
                        {shoppingCart}
                        </tbody>
                    </table>
                    <div className="cart__total">
                        <span className="cart__total-header">Total:</span>
                        <span className="cart__total-price">{totalPrice}$</span>
                    </div>
                    <button className="btn__all btn__all--cart">CHECKOUT</button>
                </div>
            </div>
        )
    }
}

export default Cart;