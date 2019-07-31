import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import Total from "../Total/Total";
import "./Basket.css";

const Basket = props => (
    <div className="basket-main">
        <div className="basket-items">
            <h1 className="basket-name" hidden={!props.isHidden}>Twój koszyk</h1>
            <h3 className="basket-empty" hidden={props.isHidden}>Twój koszyk jest pusty :(</h3>
            {props.basketGames.map(basketGame => {
                return (
                    <BasketItem key={basketGame.game.id} basketGame={basketGame} upQuantity={props.upQuantity}
                                deleteGame={props.deleteGame} downQuantity={props.downQuantity}/>
                )
            })}
        </div>
        <Total setSummaryModalState={props.setSummaryModalState} hidden={!props.isHidden} total={props.total}/>
    </div>
);

export default Basket;
