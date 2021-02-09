import React, { Component } from 'react';
import BagsCard from '../BagsCard'
import './Bags.css';

class Bags extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render () {

        return (
            <div className="bags">
                <div className="container">
                    <h1 className="bags__title">Bags</h1>
                    <div className="bags__content">
                        <BagsCard/>
                    </div>
                    <button className="bags__btn">SHOW MORE</button>
                </div>
            </div>
        )
    }
}

export default Bags;