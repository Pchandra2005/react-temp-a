import React, { useState } from "react";
export default function App10() {
    const [number,setNumber] = useState();
    return (
        <div>
           <input 
           type="number"
           placeholder="enter a number"
           onChange={(e) => setNumber(e.target.value)}
           ></input>
           <div>
            {number}
            </div>
        </div>
    )
}