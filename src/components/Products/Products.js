import React, { useState, useEffect } from 'react';
import ProductsCard from '../ProductsCard'
import './Products.css';
import Sorting from '../Sorting'
import Filter from '../Filter'
import Reset from '../Reset';
import back from '../../back'

const BagsFunc = ({title, type}) => {
    const [itemsToShow, setItemsToShow] = useState(10);
    const [expanded, setExpanded] = useState(false);
    const [isActiveUp, setIsActiveUp] = useState(false);
    const [isActiveDown, setIsActiveDown] = useState(false);
    const [isActiveReset, setIsActiveReset] = useState(false);

    const [products, setProducts] = useState(back);
    const [productDefaultFilter, setProductDefaultFilter] = useState(back);
    const [defaultProducts, setDefaultProducts] = useState([]);
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

    const productAll = defaultProducts.slice(0, itemsToShow).map((u, i) =>
        <ProductsCard
            img={u.img}
            name={u.name}
            price={u.price}
            currency={u.currency}
            quantityMax={u.inStock}
            id={u.id}
            key={`${u.name} - ${i}`}
        />
    )

    useEffect(() => {
        const sortedAllProducts = (option) => {

            const sorted = products.slice().sort((a, b) => {

                if (option === typesSorting.upPrice) {
                    if (a.price > b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price < b.price) return -1;
                } else if (option === typesSorting.downPrice) {
                    if (a.price < b.price) return 1;
                    if (a.price === b.price) return 0;
                    if (a.price > b.price) return -1;
                }

                return products;
            })

            setDefaultProducts(sorted);
        }

        sortedAllProducts(choicePrice);
    }, [products, choicePrice]);

    useEffect(() => {
        const productFilter = products.filter(item => {
            if (item.type === type) {
                return true;
            } else if (type === 'all') {
                return products;
            } else {
                return false
            }
        });

        setProducts(productFilter);
        setProductDefaultFilter(productFilter);
    }, [type])

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

        const filtered = [...productDefaultFilter].filter((item) => {
            if (e.currentTarget.value === typesFilter.priceTo) {
                return item.price < 200;
            } else if (e.currentTarget.value === typesFilter.priceFrom) {
                return item.price > 200;
            }

            return [...productDefaultFilter];
        });

        setProducts(filtered);

        setSelectedOption(e.currentTarget.value);
    }

    const resetAll = () => {
        setChoicePrice('default');
        setSelectedOption('default');
        setProducts(productDefaultFilter);
        setIsActiveReset(false);
        setIsActiveUp(false);
        setIsActiveDown(false);
    }

    return (
        <div className="products container-page">
            <div className="container container--product">
                <div className="products__header">
                    <h1 className="products__title">{title}</h1>
                    <div className="products__filtration">
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
                <div className="products__content">
                    {productAll}
                </div>
                {defaultProducts.length <= 10 ? '' :
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