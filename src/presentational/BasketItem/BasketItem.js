import React from "react";
import "./BasketItem.css";

const BasketItem = props => (
    <div className="basket-item-main">
        <div className="basket-image-cell">
            <img className="basket-image" src={props.basketGame.game.image} alt={props.basketGame.game.name}/>
            <h3>{props.basketGame.game.platform}</h3>
        </div>
        <div className="basket-info">
            <h2>{props.basketGame.game.name}</h2>
            <h4>{props.basketGame.game.description}</h4>
        </div>
        <h4>{props.basketGame.game.price}</h4>
        <h4>{props.basketGame.quantity}</h4>
    </div>
);

export default BasketItem;
