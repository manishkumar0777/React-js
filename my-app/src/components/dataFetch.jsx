import React, { useEffect, useState } from "react";

const DataFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data))
    },[]);

    return (
        <div>
            <h1>
                Data : 
            </h1>
            {data ? <pre>{JSON.stringify(data)}</pre> : <p>...Loading</p>}
        </div>
    )
}

export default DataFetch