import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import Total from "../Total/Total";

const Basket = props => (
    <div>
        <h1>Koszyk</h1>
        <h2 hidden={props.isHidden}>Twój koszyk jest pusty :(</h2>
        {props.basketGames.map(basketGame => {
            return (
                <BasketItem key={basketGame.game.id} basketGame={basketGame} upQuantity={props.upQuantity}
                deleteGame={props.deleteGame} downQuantity={props.downQuantity}/>
            )
        })}
        <Total hidden={!props.isHidden} total={props.total}/>
    </div>
);

export default Basket;
