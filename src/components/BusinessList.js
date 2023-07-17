import "../css/BusinessList.css"
import React from "react";
import { Business } from "./Business";

export function BusinessList(props){
    
    

    return (props.list.map(item => <Business data={item} />));
}