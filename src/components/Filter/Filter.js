import React from 'react';
import './Filter.css';

const Filter = ({filterPrice}) => {

    return (
        <div className="filter">
            <select onChange={filterPrice} className="filter__select">
                <option disabled selected>Filter by</option>
                <option value='priceTo'>Price up to 200</option>
                <option value='priceFrom'>Price from 200</option>
            </select>
        </div>
    )
}

export default Filter;