import React from 'react';
import PriceIcon from './arrow-price.svg';
import './Sorting.css';

const Sorting = ({sortingPriceUp, sortingPriceDown, isActiveUp, isActiveDown}) => {

    return (
        <div className="sorting">
            <span className="sorting__title">Sort by:</span>
            <div className="sorting__wrap">
                <button
                    className={isActiveUp ? "sorting__btn sorting__btn--up active" : "sorting__btn sorting__btn--up"}
                    onClick={sortingPriceUp}
                    value='upPrice'
                >
                    <img
                        className="sorting__btn-icon"
                        src={PriceIcon}
                        alt="Price up"
                    />
                </button>
                <button
                    className={isActiveDown ? "sorting__btn sorting__btn--down active" : "sorting__btn sorting__btn--down"}
                    onClick={sortingPriceDown}
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