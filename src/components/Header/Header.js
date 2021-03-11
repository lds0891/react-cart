import React from 'react';
import Menu from '../Menu';
import CartLink from '../CartLink';
import './Header.css';

const Header = () => {

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

export default Header;