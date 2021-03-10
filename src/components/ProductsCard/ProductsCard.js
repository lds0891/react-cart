import React from 'react';
import './ProductsCard.css';
import { useStoreon } from 'storeon/react';

const BagsCardFunc = ({img, name, price, currency, id, quantityMax}) => {
    const { dispatch } = useStoreon('cart');

    const addCart = () => {
        dispatch('cart/add', {
            id: id,
            quantity: 1,
            quantityMax: quantityMax
        })
    }

    return (
        <div className="products-card" onClick={addCart}>
            <img className="products-card__img" src={img} alt=""/>
            <h2 className="products-card__name">{name}</h2>
            <p className="products-card__price">{price}{currency}</p>
        </div>
    )
}

export default BagsCardFunc;