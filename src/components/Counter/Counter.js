import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {

        super(props);

        this.state = {
          count: 0,
        };

        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    countUp() {
        this.setState({
          count: this.state.count + 1,
        });
    };

    countDown () {
        this.setState({
          count: this.state.count - 1,
        });
    };

    render(){

        return(
            <div className="counter">
                <button
                    className="counter__btn"
                    onClick={this.countDown}
                >
                    -
                </button>
                <span className="counter__number">
                    { this.state.count }
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