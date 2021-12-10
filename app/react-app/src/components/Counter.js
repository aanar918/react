import React from "react"

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.change(props.index, -1)}>-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment" onClick={() => props.change(props.index, 1)}>+</button>
        </div>
    );
};

export default Counter