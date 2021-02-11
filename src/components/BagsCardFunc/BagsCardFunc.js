import React from 'react';
import './BagsCardFunc.css';

const BagsCardFunc = ({img, item, price}) => {

    return (
        <div className="bags-card">
            <img className="bags-card__img" src={img}/>
            <h2 className="bags-card__name">{item}</h2>
            <p className="bags-card__price">{price}</p>
        </div>
    )
}

export default BagsCardFunc;