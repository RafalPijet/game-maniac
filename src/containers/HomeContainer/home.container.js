import React from "react";
import GameBoxListContainer from "../GameBoxListContainer/GameBoxListContainer";
import SearchAndSortContainer from "../SearchAndSortContainer/SearchAndSortContainer";
import "./home.container.css";

export class Home extends React.Component {
    render() {
        return (
            <div className="home-main">
                <SearchAndSortContainer/>
                <GameBoxListContainer/>
            </div>
        )
    }
}
