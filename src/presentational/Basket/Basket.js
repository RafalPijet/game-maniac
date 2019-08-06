import React from "react";
import BasketItem from "../BasketItem/BasketItem";
import Total from "../Total/Total";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "./Basket.css";

const Basket = props => (
    <div className="basket-main">
        <div className="basket-items">
            <h1 className="basket-name" hidden={!props.isHidden}>Twój koszyk</h1>
            <div className="basket-empty" hidden={props.isHidden}>
                <h3 className="basket-empty">Twój koszyk jest pusty :(</h3>
                <Link to="/"><Button className="m-5" color="success">Powrót do sklepu</Button></Link>
            </div>

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
