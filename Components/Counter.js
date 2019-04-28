import React, {useState} from 'react';
import {WrapperCounter} from "../Styles/CounterComponent";



const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <WrapperCounter>
            <p>{ count }</p>
            <button
                onClick={()=> setCount(count +1)}> Click me
            </button>
        </WrapperCounter>

    )
};

export default Counter;
