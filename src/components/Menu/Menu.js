import React, { Component } from 'react';
import './Menu.css';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render () {

        return (
            <nav className="menu">
                <a className="menu__logo-link" href='#'>
                    <span className="menu__logo-text">SHOP LOGO</span>
                </a>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <a className="menu__list-link" href='#'>bags</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-link" href='#'>shoes</a>
                    </li>
                    <li className="menu__list-item">
                        <a className="menu__list-link" href='#'>hats</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Counter;