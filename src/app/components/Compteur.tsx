"use client"
import {useState} from 'react'

export default function Counter () {
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1);
    };
    const lesshandleClick = () => {
        setCount(count - 1);
    };

    return(
        <div>
            <div>
                <h1>Compteurs</h1>;
                <span>{count}</span>;
            </div>
            <button onClick={handleClick}> + </button>
            <button onClick={lesshandleClick}> - </button>
        </div>
    )
}
