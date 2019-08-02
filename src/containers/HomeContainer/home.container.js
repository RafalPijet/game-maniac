import React from "react";
import HomeCarousel from "../../presentational/HomeCarousel/HomeCarousel";
import GameBoxListContainer from "../GameBoxListContainer/GameBoxListContainer";
import SearchAndSortContainer from "../SearchAndSortContainer/SearchAndSortContainer";
import "./home.container.css";

export class Home extends React.Component {

    render() {
        return (
            <div className="home-main">
                <div className="carousel-main">
                    <HomeCarousel/>
                </div>
                <div className="elements-main">
                    <SearchAndSortContainer/>
                    <GameBoxListContainer/>
                </div>
            </div>

        )
    }
}
