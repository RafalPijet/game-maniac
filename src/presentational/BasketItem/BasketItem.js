import React from "react";
import "./BasketItem.css";
import "../SetQuantity/SetQuantity";
import SetQuantity from "../SetQuantity/SetQuantity";

const BasketItem = props => (
    <div className="basket-container">
        <div className="basket-item-main">
            <div className="basket-image-cell">
                <img className="basket-image" src={props.basketGame.game.image} alt={props.basketGame.game.name}/>
                <img src={props.basketGame.game.platform} alt="logo"/>
            </div>
            <div className="basket-info">
                <h2>{props.basketGame.game.name}</h2>
            </div>
            <h3>{props.basketGame.game.price} zł</h3>
            <SetQuantity basketGame={props.basketGame} upQuantity={props.upQuantity} downQuantity={props.downQuantity}/>
        </div>
        <div className="basket-delete-row">
            <button className="basket-delete-button"
                    onClick={() => props.deleteGame(props.basketGame.game.id)}>usuń produkt</button>
        </div>
    </div>

);

export default BasketItem;
