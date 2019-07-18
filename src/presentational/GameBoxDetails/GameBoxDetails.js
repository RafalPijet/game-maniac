import React from "react";
import "./GameBoxDetails.css"

const GameBoxDetails = props => (
    <div className="box-details-main">
        <img className="box-picture" src={props.game.imageLarge} alt={props.game.name}/>
        <div className="box-info">
            <h1>{props.game.name}</h1>
            <div className="box-row">
                <h2>{props.game.price} zł</h2>
                <h2>{props.game.platform}</h2>
            </div>
            <p>{props.game.description}</p>
        </div>
        <button onClick={() => props.addGame(props.game)}>Dodaj do koszyka</button>
    </div>
);

export default GameBoxDetails;
