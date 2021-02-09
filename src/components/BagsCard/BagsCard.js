import React, { Component } from 'react';
import './BagsCard.css';
import BagsImage from '../../assets/img/bag.png';

class Bags extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: 100,
        };
    }

    render () {

        const {price} = this.state;

        return (
            <div className="bags-card">
                <img className="bags-card__img" src={BagsImage}/>
                <h2 className="bags-card__name">Item</h2>
                <p className="bags-card__price">{price}$</p>
            </div>
        )
    }
}

export default Bags;