import React from "react";
import {connect} from "react-redux";
import Basket from "../../presentational/Basket/Basket";
import {upQuantity, downQuantity, deleteGame} from "../../actions/basket-actions";


class BasketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            total: 0
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.checkQuantityOfBasket();
            this.setState({total: this.countTotal()});//*todo: jak wyeliminować setTimeout*//
        }, 1);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        setTimeout(() => {
            this.checkQuantityOfBasket();
            this.setState({total: this.countTotal()});
        }, 1);
    }

    checkQuantityOfBasket() {
        this.props.basketGames.length !== 0 ? this.setState({hidden: true}) : this.setState({hidden: false});
    }

    countTotal() {
        let totalInBasket = [];
        const sum = (total, num) => {
            return total + num
        };
        this.props.basketGames.forEach(basketGame => {
            totalInBasket = [...totalInBasket, (basketGame.game.price * basketGame.quantity)]
        });

        if (this.props.basketGames.length !== 0) {
            return Math.round((totalInBasket.reduce(sum) * 100)) / 100;
        }
    }

    render() {
        return <Basket basketGames={this.props.basketGames} isHidden={this.state.hidden}
                       upQuantity={this.props.upQuantity} downQuantity={this.props.downQuantity}
                       deleteGame={this.props.deleteGame} total={this.state.total}/>
    }
}

const MapStateToProps = store => {
    return {
        basketGames: store.basketReducer
    }
};

const MapDispatchToProps = dispatch => ({
    upQuantity: id => dispatch(upQuantity(id)),
    downQuantity: id => dispatch(downQuantity(id)),
    deleteGame: id => dispatch(deleteGame(id))
});

export default connect(MapStateToProps, MapDispatchToProps)(BasketContainer);
