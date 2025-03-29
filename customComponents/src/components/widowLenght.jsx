
import React, { useState } from "react"

export default function WindowLength() {

    const [width , setWidth] = useState(window.innerWidth);

    React.useEffect(() => {
        function watchWindowWidth() {
            console.log("revisited");
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize" , watchWindowWidth);
        return function () {
            window.removeEventListener("resize", watchWindowWidth);
        }
    },[])
    
    return(
        <>
          <h1>Window Length {width}</h1>
        </>
    )
}