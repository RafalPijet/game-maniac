import React from "react";
import GameBox from "../GameBox/GameBox";
import "./GameBoxList.css";

const GameBoxList = props => (
    <div className="box-list-main">
        {props.games.map(game => {
            return <GameBox key={game.id} game={game}/>
        })}
    </div>
);

export default GameBoxList;
