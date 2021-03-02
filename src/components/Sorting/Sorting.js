import React from 'react';
import PriceIcon from './arrow-price.svg';
import './Sorting.css';

const Sorting = ({sortingPrice}) => {

    return (
        <div className="sorting">
            <span className="sorting__title">Sort by:</span>
            <div className="sorting__wrap">
                <button
                    className="sorting__btn sorting__btn--up"
                    onClick={sortingPrice}
                    value='upPrice'
                >
                    <img
                        className="sorting__btn-icon"
                        src={PriceIcon}
                        alt="Price up"
                    />
                </button>
                <button
                    className="sorting__btn sorting__btn--down"
                    onClick={sortingPrice}
                    value='downPrice'
                >
                    <img
                        className="sorting__btn-icon"
                        src={PriceIcon}
                        alt="Price down"
                    />
                </button>
            </div>
        </div>
    )
}

export default Sorting;