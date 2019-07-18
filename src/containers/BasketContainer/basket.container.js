import React from "react";
import { connect } from "react-redux";
import Basket from "../../presentational/Basket/Basket";
import { upQuantity, downQuantity, deleteGame} from "../../actions/basket-actions";


class BasketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
}

    componentDidMount() {
        this.checkQuantityOfBasket();
        console.log(this.props.basketGames);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        setTimeout(() => this.checkQuantityOfBasket(), 5);
        console.log(nextProps.basketGames);
    }

    checkQuantityOfBasket() {
        this.props.basketGames.length !== 0 ? this.setState({hidden: true}) : this.setState({hidden: false});
    }

    render() {
        return <Basket basketGames={this.props.basketGames} isHidden={this.state.hidden}
                upQuantity={this.props.upQuantity} downQuantity={this.props.downQuantity}
                deleteGame={this.props.deleteGame}/>
    }
}

const MapStateToProps = store => {
    return {
        basketGames: store.basketReducer.basketGames
    }
};

const MapDispatchToProps = dispatch => ({
    upQuantity: id => dispatch(upQuantity(id)),
    downQuantity: id => dispatch(downQuantity(id)),
    deleteGame: id => dispatch(deleteGame(id))
});

export default connect(MapStateToProps, MapDispatchToProps)(BasketContainer);
