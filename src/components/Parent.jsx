import React from "react";
export default function Parent(props){
    return (
        <div style={{backgroundColor: 'chocolate'}}>
            {props.children}
        </div>
    )
}