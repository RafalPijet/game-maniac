import React from "react";
import GameBox from "../GameBox/GameBox";
import { Link } from "react-router-dom";
import "./GameBoxList.css";

const GameBoxList = props => (
    <div className="box-list-main">
        {props.games.map(game => {
            return (
                <div key={game.id}>
                    <Link className="box" to={'/game/' + game.id}>
                        <GameBox game={game}/>
                    </Link>
                </div>
            )
        })}
    </div>
);

export default GameBoxList;
