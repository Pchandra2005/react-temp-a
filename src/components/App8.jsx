import React from "react";
import { useState, useEffect } from "react";
export default function App8() {
    const [a,setA] = useState(0);
    const [total,setTotal] = useState(0);

    const handleTotal = () => {
        setTotal(Number(total) + Number(a))
    };
    useEffect(() => {
        handleTotal();
    },[a])
    return (
        <div>
            <h3>This is App8</h3>
            <p>
                <input
                 type="number"
                 onChange={(e) => {setA(e.target.value)}}
                 ></input>
            </p>
            <p>
                {total}
            </p>
        </div>
    );
}