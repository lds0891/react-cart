import React, { Component } from 'react';
import './BagsCard.css';

class Bags extends Component {
    constructor(props) {
        super(props);
    }

    render () {

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