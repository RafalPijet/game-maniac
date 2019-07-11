import React from "react";
import "./GameBox.css";

const GameBox = props => (
    <div className="box-main">
        <img src={props.game.image} alt={props.game.name}/>
        <h3>{props.game.name}</h3>
        <div className="box-row">
            <h3>{props.game.platform}</h3>
            <h2>{props.game.price} zł</h2>
        </div>
    </div>
);

export default GameBox;

