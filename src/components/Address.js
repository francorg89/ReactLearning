import "../css/Address.css"
import React from "react";

export function Address(props){
    return(
        <div className="left">
            <p>{props.address.number} {props.address.street}</p>
            <p>{props.address.city}</p>
            <p>{props.address.state} {props.address.zipCode} </p>
        </div>
    );
}