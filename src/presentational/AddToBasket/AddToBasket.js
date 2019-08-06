import React from "react";
import {connect} from "react-redux";
import {addGame} from "../../actions/basket-actions";
import "./AddToBasket.css";

class AddToBasket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            disabled: false,
            style: "",
            scale: false
        }
    }

    componentDidMount() {
        const setDefaultState = () => new Promise(resolve => resolve(
            this.setState({
                description: "Dodaj do koszyka",
                disabled: false,
                style: "add-button ",
                scale: false
            })
        ));
        setDefaultState()
            .then(() => this.checkBasket());
    }

    gameInBasket() {
        this.setState({scale: true});
        setTimeout(() => this.setState({
            description: "W koszyku",
            disabled: true,
            style: "add-button-disabled "
        }), 200);
    }

    addGameToBasket(game) {
        const addGame = () => new Promise(resolve => resolve(
            this.props.addGame(game)
        ));
        addGame()
            .then(() => this.gameInBasket())
    }

    checkBasket() {
        this.props.basketGames.forEach(basketGame => {

            if (basketGame.game.id === this.props.game.id) {

                this.gameInBasket()
            }
        })
    }

    render() {
        return (
            <div className="add-button-main">
                <button className={this.state.style + (this.state.scale ? "scaleDown" : "")}
                        disabled={this.state.disabled}
                        onClick={() => this.addGameToBasket(this.props.game)}>{this.state.description}</button>
            </div>
        )
    }
};

const MapDispatchToProps = dispatch => ({
    addGame: game => dispatch(addGame(game))
});

const MapStateToProps = store => {
    return {
        basketGames: store.basketReducer
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(AddToBasket);
