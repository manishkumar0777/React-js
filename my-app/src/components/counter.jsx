import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <h2>Count : {count}</h2>
        <h1>
            <button onClick={() =>{
                console.log("clicked") 
                setCount(count+1)
                }}>Click</button>
        </h1>
        </>
    )
}

export default Counter