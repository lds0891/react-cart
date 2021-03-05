import React from 'react';
import './Reset.css';

const Reset = ({resetAll, isActiveReset}) => {

    return (
        <div className={isActiveReset ? "reset active" : "reset"}>
            <button
                className="reset__btn"
                onClick={resetAll}
                value='reset'
            >
                Reset
            </button>
        </div>
    )
}

export default Reset;