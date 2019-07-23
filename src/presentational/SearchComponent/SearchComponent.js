import React from "react";
import "./SearchComponent.css";

const SearchComponent = props => (
    <div className="search-main">
        <h3>Szukaj:</h3>
        <input className="search-input" type="text" onChange={event => props.searchGames(event.target.value)}/>
    </div>
);

export default SearchComponent

