import React from "react";
import AddToBasket from "../../presentational/AddToBasket/AddToBasket";
import "./GameBoxDetails.css"

const GameBoxDetails = props => {
    return (
    <div className="box-details-main">
        <img className="box-picture" src={props.game.imageLarge} alt={props.game.name}/>
        <div className="box-info">
            <h1 className="text-center">{props.game.name}</h1>
            <div className="box-row">
                <img src={props.game.platform} alt="logo"/>
                <div className="box-details-prices">
                    <h3 className="box-details-old-price">{props.game.oldPrice}</h3>
                    <h2>{props.game.price} zł</h2>
                </div>
            </div>
            <p className="text-justify">{props.game.description}</p>
            <AddToBasket game={props.game}/>
        </div>
        <iframe width="800" height="450" src={"https://www.youtube.com/embed/" + props.game.youtube} frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title={props.game.youtube}
                allowFullScreen></iframe>
    </div>
)};

export default GameBoxDetails;
