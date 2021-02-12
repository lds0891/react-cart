import React, { useState } from 'react';
import BagsCardFunc from '../BagsCardFunc'
import './BagsFunc.css';
import back from '../../back'

const BagsFunc = (props) => {
    const [bags] = useState(back);
    const [itemsToShow, setItemsToShow] = useState(10);
    const [expanded, setExpanded] = useState(false);

    const showMore = () => {
        const items = 10;

        if(itemsToShow === items) {
            setItemsToShow(bags.length);
            setExpanded(true)
        } else {
            setItemsToShow(items);
            setExpanded(false)
        }
    }

    const bagsAll = bags.slice(0, itemsToShow).map((u, i) =>
        <BagsCardFunc
            img={u.img}
            item={u.item}
            price={u.price}
            key={`${u.item} - ${i}`}
        />
    )

    return (
        <div className="bags container-page">
            <div className="container">
                <h1 className="bags__title">Shoes</h1>
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