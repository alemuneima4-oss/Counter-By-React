import React, {useState} from "react";
function Counter(){
    let [count, setCount] = useState(0);
    const increament = () => {
        setCount(count + 1);
    }
    const decreament = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="container">
            <p id="display">{count}</p>
            <button id="dec" onClick={decreament}>Decreament</button>
            <button id="res" onClick={reset}>Reset</button>
            <button id="inc" onClick={increament}>Increament</button>
        </div>
    )

}

export default Counter