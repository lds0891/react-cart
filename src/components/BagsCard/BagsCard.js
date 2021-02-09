import React, { Component } from 'react';
import './BagsCard.css';
import BagsImage from '../../assets/img/bag.png';

class Bags extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render () {

        const {price} = this.state;

        return (
            <div className="bags-card">
                <img className="bags-card__img" src={this.props.img}/>
                <h2 className="bags-card__name">{this.props.item}</h2>
                <p className="bags-card__price">{this.props.price}</p>
            </div>
        )
    }
}

export default Bags;