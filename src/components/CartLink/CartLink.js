import React, { useEffect, useState } from 'react';
import CartIcon from './cart.svg';
import { NavLink } from 'react-router-dom';
import { useStoreon } from 'storeon/react';
import './CartLink.css';
import back from '../../back'

const CartLink = () => {
    const { cart } = useStoreon('cart');
    const [itemCount, setItemCount] = useState(0);
    const [priceCount, setPriceCount] = useState(0);

    useEffect(() => {
        let itemCountCart = 0;
        let priceCountCart = 0;

        cart.forEach((item) => {
            let cartFindId = back.find((elem) => elem.id === item.id);

            if(item.quantity < cartFindId.inStock) {
                itemCountCart = itemCountCart + item.quantity;
                priceCountCart = priceCountCart + cartFindId.price * item.quantity;
            } else if (item.quantity >= cartFindId.inStock) {
                itemCountCart = itemCountCart + cartFindId.inStock;
                priceCountCart = priceCountCart + cartFindId.price * cartFindId.inStock;
            }
        });

        setItemCount(itemCountCart)
        setPriceCount(priceCountCart);
    }, [cart])


    return (
        <div className="cart-link">
            <NavLink className="cart-link__link" to={"/cart"}>
                <span className="cart-link__item">{itemCount} items</span>
                <span className="cart-link__item">/</span>
                <span className="cart-link__item cart-link__item--price">{priceCount}$</span>
                <img src={CartIcon} className="cart-link__icon" alt=""/>
            </NavLink>
        </div>
    )
}

export default CartLink;