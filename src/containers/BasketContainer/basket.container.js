import React from "react";
import { connect } from "react-redux";
import Basket from "../../presentational/Basket/Basket";
import { upQuantity, downQuantity, deleteGame} from "../../actions/basket-actions";


class BasketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false,
            total: 0
        }
}

    componentDidMount() {
        this.checkQuantityOfBasket();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        setTimeout(() => this.checkQuantityOfBasket(), 5);
    }

    checkQuantityOfBasket() {
        this.props.basketGames.length !== 0 ? this.setState({hidden: true}) : this.setState({hidden: false});
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
