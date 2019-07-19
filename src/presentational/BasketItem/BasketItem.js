import React from "react";
import "./BasketItem.css";

const BasketItem = props => (
    <div className="basket-container">
        <div className="basket-item-main">
            <div className="basket-image-cell">
                <img className="basket-image" src={props.basketGame.game.image} alt={props.basketGame.game.name}/>
                <h3>{props.basketGame.game.platform}</h3>
            </div>
            <div className="basket-info">
                <h2>{props.basketGame.game.name}</h2>
                <h4>{props.basketGame.game.description}</h4>
            </div>
            <h4>{props.basketGame.game.price} zł</h4>
            <div className="basket-quantity-cell">
                <button className="basket-item-button"
                        onClick={() => props.downQuantity(props.basketGame.game.id)}>-</button>
                <h4>{props.basketGame.quantity}</h4>
                <button className="basket-item-button"
                        onClick={() => props.upQuantity(props.basketGame.game.id)}>+</button>
                <h4>szt</h4>
            </div>
        </div>
        <div className="basket-delete-row">
            <button className="basket-delete-button"
                    onClick={() => props.deleteGame(props.basketGame.game.id)}>usuń produkt</button>
        </div>
    </div>

);

export default BasketItem;
