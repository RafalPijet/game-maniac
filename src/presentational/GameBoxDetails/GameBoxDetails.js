import React from "react";
import AddToBasket from "../../presentational/AddToBasket/AddToBasket";
import "./GameBoxDetails.css"

const GameBoxDetails = props => {
    return (
    <div className="box-details-main">
        <img className="box-picture" src={props.game.imageLarge} alt={props.game.name}/>
        <div className="box-info">
            <h1>{props.game.name}</h1>
            <div className="box-row">
                <img src={props.game.platform} alt="logo"/>
                <div className="box-details-prices">
                    <h3 className="box-details-old-price">{props.game.oldPrice}</h3>
                    <h2>{props.game.price} zł</h2>
                </div>
            </div>
            <p>{props.game.description}</p>
            <AddToBasket game={props.game}/>
        </div>
    </div>
)};

export default GameBoxDetails;
