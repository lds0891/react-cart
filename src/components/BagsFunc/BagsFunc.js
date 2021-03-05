import React, { useState, useEffect } from 'react';
import BagsCardFunc from '../BagsCardFunc'
import './BagsFunc.css';
import back from '../../back'
import Sorting from '../Sorting'
import Filter from '../Filter'
import Reset from '../Reset';

const BagsFunc = () => {
    const [itemsToShow, setItemsToShow] = useState(10);
    const [expanded, setExpanded] = useState(false);
    const [isActiveUp, setIsActiveUp] = useState(false);
    const [isActiveDown, setIsActiveDown] = useState(false);
    const [isActiveReset, setIsActiveReset] = useState(false);

    const [bags, setBags] = useState(back);
    const [products, setProducts] = useState([]);
    const [choicePrice, setChoicePrice] = useState('default');

    const [selectedOption, setSelectedOption] = useState('default');

    const typesSorting = {
        default: 'default',
        upPrice: 'upPrice',
        downPrice: 'downPrice',
    };

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

    const bagsAll = products.slice(0, itemsToShow).map((u, i) =>
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

            const sorted = bags.slice().sort((a, b) => {

                if (type === typesSorting.upPrice) {
                    if (a.price > b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price < b.price) return -1;
                } else if (type === typesSorting.downPrice) {
                    if (a.price < b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price > b.price) return -1;
                }

                return bags;
            })

            setProducts(sorted);
        }

        sortedAllProducts(choicePrice);
    }, [bags, choicePrice]);

    const sortingPriceUp = (e) => {

        if (choicePrice === typesSorting.default) {
            setChoicePrice(e.currentTarget.value)
            setIsActiveUp(true);
            setIsActiveDown(false);
            setIsActiveReset(true);
        } else if (choicePrice === typesSorting.downPrice) {
            setChoicePrice(e.currentTarget.value)
            setIsActiveUp(true);
            setIsActiveDown(false);
            setIsActiveReset(true);
        } else if (choicePrice === typesSorting.upPrice) {
            setChoicePrice('default')
            setIsActiveDown(false);
            setIsActiveUp(false);
            setIsActiveReset(false);
        }
    }
    const sortingPriceDown = (e) => {

        if (choicePrice === typesSorting.default) {
            setChoicePrice(e.currentTarget.value)
            setIsActiveDown(true);
            setIsActiveUp(false);
            setIsActiveReset(true);
        } else if (choicePrice === typesSorting.upPrice) {
            setChoicePrice(e.currentTarget.value)
            setIsActiveDown(true);
            setIsActiveUp(false);
            setIsActiveReset(true);
        } else if (choicePrice === typesSorting.downPrice) {
            setChoicePrice('default')
            setIsActiveDown(false);
            setIsActiveUp(false);
            setIsActiveReset(false);
        }
    }

    const filterPrice = (e) => {

        const typesFilter = {
            priceTo: 'priceTo',
            priceFrom: 'priceFrom',
        };

        if (e.currentTarget.value === typesFilter.priceTo) {
            setIsActiveReset(true);
        } else if (e.currentTarget.value === typesFilter.priceFrom) {
            setIsActiveReset(true);
        }

        const filtered = [...back].filter((item) => {
            if (e.currentTarget.value === typesFilter.priceTo) {
                return item.price < 200;
            } else if (e.currentTarget.value === typesFilter.priceFrom) {
                return item.price > 200;
            }

            return [...back];
        })

        setBags(filtered);

        setSelectedOption(e.currentTarget.value);
    }

    const resetAll = () => {
        setChoicePrice('default');
        setSelectedOption('default');
        setBags(back);
        setIsActiveReset(false);
        setIsActiveUp(false);
        setIsActiveDown(false);
    }

    return (
        <div className="bags container-page">
            <div className="container container--product">
                <div className="bags__header">
                    <h1 className="bags__title">Bags</h1>
                    <div className="bags__filtration">
                        <Reset
                            resetAll={resetAll}
                            isActiveReset={isActiveReset}
                        />
                        <Sorting
                            sortingPriceUp={sortingPriceUp}
                            sortingPriceDown={sortingPriceDown}
                            isActiveUp={isActiveUp}
                            isActiveDown={isActiveDown}
                        />
                        <Filter
                            filterPrice={filterPrice}
                            selectedOption={selectedOption}
                        />
                    </div>
                </div>
                <div className="bags__content">
                    {bagsAll}
                </div>
                {products.length <= 10 ? '' :
                    <button className="btn__all"
                        onClick={showMore}
                    >
                        {expanded ?
                            (<span>SHOW LESS</span>) : (<span>SHOW MORE</span>)
                        }
                    </button>
                }
            </div>
        </div>
    )
}

export default BagsFunc;