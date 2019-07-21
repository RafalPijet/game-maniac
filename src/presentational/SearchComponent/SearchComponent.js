import React from "react";

const SearchComponent = props => (
    <div>
        <h3>Szukaj:</h3>
        <input type="text" onChange={event => props.searchGames(event.target.value)}/>
    </div>
);

export default SearchComponent

