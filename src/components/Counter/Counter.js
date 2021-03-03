import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
          count: 0,
        };
    }

    countUp = () => {
        this.setState({
          count: this.state.count + 1,
        });
    };

    countDown = () => {
        this.setState({
          count: this.state.count - 1,
        });
    };

    render () {
        // const sortedAllProducts = (type) => {
        //     const typesSorting = {
        //         default: 'default',
        //         upPrice: 'upPrice',
        //         downPrice: 'downPrice',
        //         priceTo: 'priceTo',
        //         priceFrom: 'priceFrom',
        //     };

        //     if (type === typesSorting.upPrice || typesSorting.downPrice) {
        //         const sorted = [...back].sort((a, b) => {

        //             if (type === typesSorting.upPrice) {
        //                 if (a.price > b.price) return 1;
        //                 if (a.price === b.price) return 0;
        //                 if (a.price < b.price) return -1;
        //             } else if (type === typesSorting.downPrice) {
        //                 if (a.price < b.price) return 1;
        //                 if (a.price === b.price) return 0;
        //                 if (a.price > b.price) return -1;
        //             }

        //             return [...back];
        //         })
        //         console.log(type)
        //         setProducts(sorted);
        //     }

        //     if (type === typesSorting.priceTo || typesSorting.priceFrom) {

        //         const filtered = [...back].filter((item) => {
        //             if (type === typesSorting.priceTo) {
        //                 return item.price < 200
        //             } else if (type === typesSorting.priceFrom) {
        //                 return item.price > 200
        //                 }

        //             return [...back];
        //         })
        //         console.log(type)
        //         setProducts(filtered);
        //     }
        // }
        const { count } = this.state;

        return (
            <div className="counter">
                <button
                    className="counter__btn"
                    onClick={this.countDown}
                >
                    -
                </button>
                <span className="counter__number">
                    { count }
                </span>
                <button
                    className="counter__btn"
                    onClick={this.countUp}
                >
                    +
                </button>
            </div>
        )
    }
}

export default Counter;