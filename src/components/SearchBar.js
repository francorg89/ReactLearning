
import { useState } from "react";
import "../css/SearchBar.css";




export function SearchBar(){

    const [sort, setSort] = useState("");
    const [type, setType] = useState("")
    const [zipCode, setzipCode] = useState("");
    const [state, setState] = useState({sort:"",type:"",zipCode:""});
    
    const [flag, setFlag] = useState([false,false,false]);
   
    function handleSortClick(e){
        const select = e.target.value;
        if(select==="best")
            setFlag([true,false,false]);
        else if(select==="top")
            setFlag([false,true,false]);
        else
            setFlag([false,false,true]);
        
        setSort(select);
    }

    function handleChange(e){
        let name= e.target.name;
        let value= e.target.value;
        if(name==="type")
            setType(value)
        if(name==="zipCode")
            setzipCode(value);
    }
    function handleClick (e){
        //this function will send the data for th request menawhile:
        setState({sort:sort,type:type,zipCode:zipCode})
    }
   
    

    return (
    
        <div className="form">
            <div className="sortSelector" >
                <button style={{color: flag[0]? "#e6be2f" : "black" }} value="best" onClick={handleSortClick}>Best Match</button>
                <button style={{color: flag[1]? "#e6be2f" : "black" }} value="top" onClick={handleSortClick}>Top Ranked</button>
                <button style={{color: flag[2]? "#e6be2f" : "black" }} value="review" onClick={handleSortClick}>Most Review</button>
            </div>
            <div>
                <input name="type" onChange={handleChange} placeholder="Enter your search" />
                <input name="zipCode" onChange={handleChange} type="number" placeholder="Zip Code" />
            </div>
            <button onClick={handleClick}>Press Here</button>
            <h4>Sort selected:{state.sort}, type to show{state.type} in the code {state.zipCode}</h4>
            
        </div>
    );
}