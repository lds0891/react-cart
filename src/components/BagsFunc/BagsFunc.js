import React, { useState, useEffect } from 'react';
import BagsCardFunc from '../BagsCardFunc'
import './BagsFunc.css';
import back from '../../back'
import Sorting from '../Sorting'
import Filter from '../Filter'

const BagsFunc = () => {
    const [itemsToShow, setItemsToShow] = useState(10);
    const [expanded, setExpanded] = useState(false);

    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortPrice, setSortPrice] = useState('default');

    const showMore = () => {
        const items = 10;

        if(itemsToShow === items) {
            setItemsToShow(back.length);
            setExpanded(true)
        } else {
            setItemsToShow(items);
            setExpanded(false)
        }
    }

    const bagsAll = sortedProducts.slice(0, itemsToShow).map((u, i) =>
        <BagsCardFunc
            img={u.img}
            name={u.name}
            price={u.price}
            currency={u.currency}
            id={u.id}
            key={`${u.name} - ${i}`}
        />
    )

    useEffect(() => {

        const sortedAllProducts = (type) => {

            const typesSorting = {
                default: 'default',
                upPrice: 'upPrice',
                downPrice: 'downPrice',
            };

            const sorted = [...back].sort((a, b) => {

                if (type === typesSorting.upPrice) {
                    if (a.price > b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price < b.price) return -1;
                } else if (type === typesSorting.downPrice) {
                    if (a.price < b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price > b.price) return -1;
                }

                return [...back];
            })

            setSortedProducts(sorted);
        }

        sortedAllProducts(sortPrice);
    }, [sortPrice])

    const sortingPrice = (e) => {
        setSortPrice(e.currentTarget.value);
    }

    return (
        <div className="bags container-page">
            <div className="container container--product">
                <div className="bags__header">
                    <h1 className="bags__title">Shoes</h1>
                    <div className="bags__filtration">
                        <Sorting
                            sortingPrice={sortingPrice}
                        />
                        <Filter/>
                    </div>
                </div>
                <div className="bags__content">
                    {bagsAll}
                </div>
                <button className="btn__all"
                    onClick={showMore}
                >
                {expanded ? (
                    <span>SHOW LESS</span>
                ) : (
                    <span>SHOW MORE</span>
                )}
                </button>
            </div>
        </div>
    )
}

export default BagsFunc;