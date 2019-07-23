import React from "react";
import "./GameBox.css";

const GameBox = props => (
    <div className="box-main">
        <img className="box-image" src={props.game.image} alt={props.game.name}/>
        <h3>{props.game.name}</h3>
        <div className="box-row">
            <img src={props.game.platform} alt="logo"/>
            <h2>{props.game.price} zł</h2>
        </div>
    </div>
);

export default GameBox;

