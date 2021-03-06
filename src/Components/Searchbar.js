import React from "react";
import Articles from "./Articles";
import { useState, useEffect } from "react";



const Searchbar = () => {

    const[search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.firstChild.value);
        console.log(e.target.firstChild.value);
        console.log(`StateVariable:  ${search}`)
        }
    
    return(
        <div id="form-container">
            {/* <h1>Hacker-News</h1> */}
            <form onSubmit={handleSearch}>
                <input type="text" id="text-field" placeholder="Search..."></input>
                <button type="submit">Search</button>
            </form>
            
            <Articles query={search}/>
        </div>
            

    )
}

export default Searchbar;