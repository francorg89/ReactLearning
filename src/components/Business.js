import "../css/Business.css";
import React from "react";
import { Review } from "./Review";
import { Address } from "./Address";


export function Business(props) {
    return (
        <div className="container">
            <h3>{props.data.name}</h3>
            <img src={props.data.image} alt="Delicius food in here"/>
            <div className="info" >    
                <Address address={props.data.address} />
                <Review review={props.data.review}/>
            </div>
        </div>
    );
}