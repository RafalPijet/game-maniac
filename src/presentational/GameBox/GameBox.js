import React from "react";
import ShowPriceComponent from "../../presentational/ShowPriceComponent/ShowPriceComponent";
import "./GameBox.css";

const GameBox = props => (
    <div className="box-main">
        <img className="box-image" src={props.game.image} alt={props.game.name}/>
        <h3 className="box-name">{props.game.name}</h3>
        <div className="box-row">
            <img src={props.game.platform} alt="logo"/>
            <ShowPriceComponent price={props.game.price} oldPrice={props.game.oldPrice}/>
        </div>
    </div>
);

export default GameBox;

