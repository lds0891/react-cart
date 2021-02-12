import React, { Component } from 'react';
import DeleteIcon from './delete.svg';
import './CartCard.css';

class CartCard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }


    render () {

        return (
            <tr className="cart-card">
                    <td className="cart-card__col">
                        <div className="cart-card__item">
                            <img className="cart-card__img" src={this.props.img}/>
                            <p className="cart-card__name">{this.props.item}</p>
                        </div>
                    </td>
                    <td className="cart-card__col">
                        <p className="cart-card__price-all">{this.props.price}</p>
                        <p className="cart-card__price-per">{this.props.onePrice}</p>
                    </td>
                    <td className="cart-card__col">
                        <div className="cart-card__item">
                            <input className="cart-card__quantity" defaultValue={this.props.quantity}/>
                        </div>
                    </td>
                    <td className="cart-card__col">
                        <button className="cart-card__btn">
                            <img className="cart-card__btn-icon" src={DeleteIcon}/>
                        </button>
                    </td>
            </tr>
        )
    }
}

export default CartCard;