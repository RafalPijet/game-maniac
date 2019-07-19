import React from "react";
import GameBox from "../GameBox/GameBox";
import AddToBasket from "../../presentational/AddToBasket/AddToBasket";
import { Link } from "react-router-dom";
import "./GameBoxList.css";

const GameBoxList = props => (
    <div className="box-list-main">
        {props.games.map(game => {
            return (
                <div className="box-list" key={game.id}>
                    <Link className="box" to={'/game/' + game.id}>
                        <GameBox game={game}/>
                    </Link>
                    <AddToBasket game={game}/>
                </div>
            )
        })}
    </div>
);

export default GameBoxList;
