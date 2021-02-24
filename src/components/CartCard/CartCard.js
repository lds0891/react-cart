import React, { useState } from 'react';
import { useStoreon } from 'storeon/react'
import DeleteIcon from './delete.svg';
import './CartCard.css';

const CartCard = ({img, name, price, currency, id, quantity}) => {
    const { dispatch, cart } = useStoreon('cart');

    const deleteItem = () => {
        // dispatch('cart/add', {
        //     img: img,
        //     name: name,
        //     price: price,
        //     quantity: quantity,
        //     currency: currency,
        //     id: id
        // })
    }

    const handleQuantityChange = (e) => {
        // dispatch('cart/add', {id: id, quantity: 1}, e.target.value)
    }

    return (
        <tr className="cart-card" id={id}>
                <td className="cart-card__col">
                    <div className="cart-card__item">
                        <img className="cart-card__img" src={img} alt=""/>
                        <p className="cart-card__name">{name}</p>
                    </div>
                </td>
                <td className="cart-card__col">
                    <p className="cart-card__price-all">{price * quantity}{currency}</p>
                </td>
                <td className="cart-card__col">
                    <div className="cart-card__item">
                        <input className="cart-card__quantity"
                            type="number"
                            name="quantity"
                            min={1}
                            defaultValue={1}
                            onChange={handleQuantityChange}
                        />
                    </div>
                </td>
                <td className="cart-card__col">
                    <button className="cart-card__btn" onClick={deleteItem}>
                        <img className="cart-card__btn-icon" src={DeleteIcon} alt=""/>
                    </button>
                </td>
        </tr>
    )
}

export default CartCard;