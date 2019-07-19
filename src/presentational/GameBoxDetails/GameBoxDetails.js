import React from "react";
import AddToBasket from "../../presentational/AddToBasket/AddToBasket";
import "./GameBoxDetails.css"

const GameBoxDetails = props => (
    <div className="box-details-main">
        <img className="box-picture" src={props.game.imageLarge} alt={props.game.name}/>
        <div className="box-info">
            <h1>{props.game.name}</h1>
            <div className="box-row">
                <h2>{props.game.platform}</h2>
                <h2>{props.game.price} zł</h2>
            </div>
            <p>{props.game.description}</p>
            <AddToBasket game={props.game}/>
        </div>
    </div>
);

export default GameBoxDetails;
