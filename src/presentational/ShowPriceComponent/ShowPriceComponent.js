import React from "react";

const ShowPriceComponent = props => (
    <div>
        <h4>{props.game.oldPrice}</h4>
        <h2>{Math.floor(props.game.price)}</h2>
        <div>

        </div>
    </div>
);

export default ShowPriceComponent;
