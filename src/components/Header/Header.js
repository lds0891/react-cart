import React, { Component } from 'react';
import Menu from '../Menu';
import CartLink from '../CartLink';
import './Header.css';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render () {

        return (
            <header className="header">
                <div className="container">
                    <div className="header__wrap">
                        <Menu/>
                        <CartLink/>
                    </div>
                </div>
            </header>
        )
    }
}

export default Counter;