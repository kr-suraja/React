import React from "react";
import Listing from "./Listing";
function List(){
    
    const names= ["bruse","clark","bill"];
    const nameList=names.map(name=> <Listing name={name}/>)
    return(
        <div>{nameList}</div>
    )
}

export default List;