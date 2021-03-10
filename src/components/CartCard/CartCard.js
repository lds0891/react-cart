import React, { useEffect, useState } from 'react';
import { useStoreon } from 'storeon/react'
import DeleteIcon from './delete.svg';
import './CartCard.css';

const CartCard = ({img, name, price, currency, id, quantityInCart, quantityMax}) => {
    const [quantityStock, setQuantityStock] = useState(0);
    const [priceProduct, setPriceProduct] = useState(0);
    const { dispatch, cart } = useStoreon('cart');

    const deleteItem = () => {
        dispatch('cart/delete', id)
    }

    const handleQuantityChange = (e) => {
        dispatch('cart/quantity', {
            id: id,
            quantity: Number(e.target.value)
        })
    }

    useEffect(() => {
        let itemQuantityMax = 0;
        let itemPriceProduct = 0;

        itemQuantityMax = quantityMax - quantityInCart;
        itemPriceProduct = price * quantityInCart;

        setQuantityStock(itemQuantityMax);
        setPriceProduct(itemPriceProduct);
    }, [cart])

    return (
        <tr className="cart-card" id={id}>
                <td className="cart-card__col">
                    <div className="cart-card__item">
                        <img className="cart-card__img" src={img} alt=""/>
                        <p className="cart-card__name">{name}</p>
                    </div>
                </td>
                <td className="cart-card__col">
                    <p className="cart-card__price-all">{priceProduct}{currency}</p>
                    {quantityInCart > 1 ?
                        <p className="cart-card__price-per">{price}{currency} per item</p> : ""
                    }
                </td>
                <td className="cart-card__col">
                    <div className="cart-card__item cart-card__item_quantity">
                        <input className="cart-card__quantity"
                            type="number"
                            name="quantity"
                            min={1}
                            max={quantityMax}
                            defaultValue={quantityInCart}
                            onChange={handleQuantityChange}
                        />
                        <span className="cart-card__stock">In stock: {quantityStock}</span>
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