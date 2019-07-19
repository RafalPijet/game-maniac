import React from "react";
import { connect } from "react-redux";
import { addGame } from "../../actions/basket-actions";
import "./AddToBasket.css";

const AddToBasket = props => (
    <div className="add-button-main">
        <button className="add-button" onClick={() => props.addGame(props.game)}>Dodaj do koszyka</button>
    </div>
);

const MapDispatchToProps = dispatch => ({
    addGame: game => dispatch(addGame(game))
});

export default connect(null, MapDispatchToProps)(AddToBasket);
