import "../css/Review.css";
import React from "react";

export function Review (props){
    return(
        <div className="righ">
            <p>{props.review.category}</p>
            <p>{props.review.rating} avg</p>
            <p>{props.review.counts} counts</p>
        </div>
    );
}