import React from "react";
import "./SetQuantity.css";

class SetQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            upButton: false,
            downButton: true
        }
    }

    componentDidMount() {
        this.checkInterval();
    }

    setQuantityInStore = (id, isUp) => new Promise(resolve => resolve(
        isUp ? this.props.upQuantity(id) : this.props.downQuantity(id)
    ));

    quantityHandling(id, isUp) {
        this.setQuantityInStore(id, isUp)
            .then(() => this.checkInterval())
    }

    checkInterval() {
        this.props.basketGame.quantity > 1 ? this.setState({downButton: false}) :
            this.setState({downButton: true});
        this.props.basketGame.quantity < this.props.basketGame.game.quantity ? this.setState({upButton: false}) :
            this.setState({upButton: true})
    }

    render() {
        return (
            <div className="basket-quantity-cell">
                <div className="basket-button-cell"
                     onClick={() => this.quantityHandling(this.props.basketGame.game.id, false)}>
                    <button className="basket-item-button" disabled={this.state.downButton}
                            onClick={() => this.quantityHandling(this.props.basketGame.game.id, false)}>-
                    </button>
                </div>
                <h4>{this.props.basketGame.quantity}</h4>
                <div className="basket-button-cell"
                     onClick={() => this.quantityHandling(this.props.basketGame.game.id, true)}>
                    <button className="basket-item-button" disabled={this.state.upButton}
                            onClick={() => this.quantityHandling(this.props.basketGame.game.id, true)}>+
                    </button>
                </div>
                <h4>szt</h4>
            </div>
        )
    }
}

export default SetQuantity;
