import React, { useState } from 'react';
import './CounterFunc.css';

const CounterFunc = () => {
    const [count, setCount] = useState(0);

    const countUp = () => {
        setCount(count + 1)
    };

    const countDown = () => {
        setCount(count - 1)
    };

    return (
        <div className="counter-func">
            <button
                className="counter-func__btn"
                onClick={countDown}
            >
                -
            </button>
            <span className="counter-func__number">
                { count }
            </span>
            <button
                className="counter-func__btn"
                onClick={countUp}
            >
                +
            </button>
        </div>
    )
}

export default CounterFunc;