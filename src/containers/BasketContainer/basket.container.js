import React from "react";
import {connect} from "react-redux";
import Basket from "../../presentational/Basket/Basket";
import { upQuantity, downQuantity, deleteGame } from "../../actions/basket-actions";
import {setSummaryModalState, setTotal} from "../../actions/values-actions";

class BasketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
    }

    componentDidMount() {
        this.checkQuantityOfBasket(this.props.basketGames);
    }

    componentWillReceiveProps(nextProps) {
        
        if (!nextProps.summaryModalState) {
            this.checkQuantityOfBasket(nextProps.basketGames);
        }
    }

    checkQuantityOfBasket(basketGames) {
        this.props.setTotal(this.countTotal(basketGames));
        basketGames.length !== 0 ? this.setState({hidden: true}) : this.setState({hidden: false});
    }

    countTotal(basketGames) {
        let totalInBasket = [];
        const sum = (total, num) => {
            return total + num
        };
        basketGames.forEach(basketGame => {
            totalInBasket = [...totalInBasket, (basketGame.game.price * basketGame.quantity)]
        });

        if (basketGames.length !== 0) {
            return Math.round((totalInBasket.reduce(sum) * 100)) / 100;
        }
    }

    render() {
        return <Basket basketGames={this.props.basketGames} isHidden={this.state.hidden}
                       upQuantity={this.props.upQuantity} downQuantity={this.props.downQuantity}
                       deleteGame={this.props.deleteGame} total={this.props.total}
                       setSummaryModalState={this.props.setSummaryModalState}/>
    }
}

const MapStateToProps = store => {
    return {
        basketGames: store.basketReducer,
        total: store.valuesReducer.total,
        summaryModalState: store.valuesReducer.summaryModalState
    }
};

const MapDispatchToProps = dispatch => ({
    upQuantity: id => dispatch(upQuantity(id)),
    downQuantity: id => dispatch(downQuantity(id)),
    deleteGame: id => dispatch(deleteGame(id)),
    setTotal: value => dispatch(setTotal(value)),
    setSummaryModalState: isTrue => dispatch(setSummaryModalState(isTrue))
});

export default connect(MapStateToProps, MapDispatchToProps)(BasketContainer);
