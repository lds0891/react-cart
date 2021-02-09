import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink className="menu__logo-link" to={"/"}>
                    <span className="menu__logo-text">SHOP LOGO</span>
                </NavLink>
                <ul className="menu__list">
                    <li className="menu__list-item">
                        <NavLink className="menu__list-link" to={"/bags"}>bags</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className="menu__list-link" to={"/shoes"}>shoes</NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink className="menu__list-link" to={"/hats"}>hats</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Counter;