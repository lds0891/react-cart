import React from 'react';
import './BagsCardFunc.css';
import { useStoreon } from 'storeon/react';

const BagsCardFunc = ({img, name, price, currency, id}) => {
    const { dispatch } = useStoreon('cart');

    const addCart = () => {
        dispatch('cart/add', {id: id, quantity: 1})
    }

    return (
        <div className="bags-card" onClick={addCart}>
            <img className="bags-card__img" src={img} alt=""/>
            <h2 className="bags-card__name">{name}</h2>
            <p className="bags-card__price">{price}{currency}</p>
        </div>
    )
}

export default BagsCardFunc;