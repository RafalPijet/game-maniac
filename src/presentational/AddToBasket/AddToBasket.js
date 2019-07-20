import React from "react";
import { connect } from "react-redux";
import { addGame } from "../../actions/basket-actions";
import "./AddToBasket.css";

class AddToBasket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "Dodaj do koszyka",
            disabled: false,
            style: "add-button"
        }
    }

    componentDidMount() {
        this.checkBasket();
    }

    componentWillReceiveProps(nextProps) {
        setTimeout(() => this.checkBasket(), 1); /*todo: jak się pozbyć setTimeout*/
    }

    checkBasket() {
        this.props.basketGames.forEach(basketGame => {

            if (basketGame.game.id === this.props.game.id) {
                this.setState({
                    description: "W koszyku",
                    disabled: true,
                    style: "add-button-disabled"
                })
            }
        })
    }

    render() {
        return (
            <div className="add-button-main">
                <button className={this.state.style} disabled={this.state.disabled}
                        onClick={() => this.props.addGame(this.props.game)}>{this.state.description}</button>
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
