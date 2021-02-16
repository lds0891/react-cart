import React, { useState } from 'react';
import { useStoreon } from 'storeon/react'
import DeleteIcon from './delete.svg';
import './CartCard.css';

const CartCard = ({img, name, price, currency, id}) => {
    const [quantity, setQuantity] = useState(0);
    const { dispatch } = useStoreon('cart');

    const deleteItem = () => {
        dispatch('cart/add', {
            img: img,
            name: name,
            price: price,
            currency: currency,
            id: id
        })
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
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
                            min="1"
                            value={quantity}
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