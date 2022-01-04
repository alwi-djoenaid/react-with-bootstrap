import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <p className="card-text">Count: {count}</p>
            <br />
            <button className="btn btn-primary btn-md mx-2" onClick={() => setCount(0)}>Reset</button>
            <button className="btn btn-primary btn-md mx-2" onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button className="btn btn-primary btn-md mx-2" onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}

export default Counter;