import React, { Component } from 'react';
import BagsCard from '../BagsCard'
import './Bags.css';
import bags from '../../back'

class Bags extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bags: bags,
            itemsToShow: 10,
            expanded: false
        };
    }

    showMore = () => {
        this.state.itemsToShow === 10 ? (
          this.setState({ itemsToShow: this.state.bags.length, expanded: true })
        ) : (
          this.setState({ itemsToShow: 10, expanded: false })
        )
      }

    render () {
        const bags = this.state.bags.slice(0, this.state.itemsToShow).map((u, i) =>
            <BagsCard
                img={u.img}
                name={u.name}
                price={u.price}
                currency={u.currency}
                key={`${u.name} - ${i}`}
            />
        )

        return (
            <div className="bags container-page">
                <div className="container">
                    <h1 className="bags__title">Bags</h1>
                    <div className="bags__content">
                        {bags}
                    </div>
                    <button className="btn__all" onClick={this.showMore}>
                    {this.state.expanded ? (
                        <span>SHOW LESS</span>
                    ) : (
                        <span>SHOW MORE</span>
                    )}
                    </button>
                </div>
            </div>
        )
    }
}

export default Bags;