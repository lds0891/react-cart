import React, { useState, useEffect } from 'react';
import BagsCardFunc from '../BagsCardFunc'
import './BagsFunc.css';
import back from '../../back'
import Sorting from '../Sorting'
import Filter from '../Filter'

const BagsFunc = () => {
    const [itemsToShow, setItemsToShow] = useState(10);
    const [expanded, setExpanded] = useState(false);
    const [isActiveUp, setIsActiveUp] = useState(false);
    const [isActiveDown, setIsActiveDown] = useState(false);

    const [bags, setBags] = useState(back);
    const [products, setProducts] = useState([]);
    const [choicePrice, setChoicePrice] = useState('default');

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
            const typesSorting = {
                default: 'default',
                upPrice: 'upPrice',
                downPrice: 'downPrice',
            };

            if (type === typesSorting.upPrice) {
                setIsActiveUp(true);
                setIsActiveDown(false);
            } else if (type === typesSorting.downPrice) {
                setIsActiveDown(true);
                setIsActiveUp(false);
            }

            const sorted = [...bags].sort((a, b) => {

                if (type === typesSorting.upPrice) {
                    if (a.price > b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price < b.price) return -1;
                } else if (type === typesSorting.downPrice) {
                    if (a.price < b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price > b.price) return -1;
                }

                return [...bags];
            })

            setProducts(sorted);
        }

        sortedAllProducts(choicePrice);
    }, [bags, choicePrice]);

    const sortingPrice = (e) => {
        setChoicePrice(e.currentTarget.value);
    }

    const filterPrice = (e) => {
        const typesFilter = {
            priceTo: 'priceTo',
            priceFrom: 'priceFrom',
        };

        const filtered = [...back].filter((item) => {
            if (e.currentTarget.value === typesFilter.priceTo) {
                return item.price < 200
            } else if (e.currentTarget.value === typesFilter.priceFrom) {
                return item.price > 200
            }

            return [...back];
        })

        setBags(filtered);
    }

    return (
        <div className="bags container-page">
            <div className="container container--product">
                <div className="bags__header">
                    <h1 className="bags__title">Bags</h1>
                    <div className="bags__filtration">
                        <Sorting
                            sortingPrice={sortingPrice}
                            isActiveUp={isActiveUp}
                            isActiveDown={isActiveDown}
                        />
                        <Filter
                            filterPrice={filterPrice}
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