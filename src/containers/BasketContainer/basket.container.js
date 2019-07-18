import React from "react";
import { connect } from "react-redux";
import Basket from "../../presentational/Basket/Basket";

class BasketContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        }
}

    componentDidMount() {
        this.props.basketGames.length !== 0 ? this.setState({hidden: true}) : this.setState({hidden: false})
    }

    render() {
        return <Basket basketGames={this.props.basketGames} isHidden={this.state.hidden}/>
    }
}

const MapStateToProps = store => {
    return {
        basketGames: store.basketReducer.basketGames
    }
};

export default connect(MapStateToProps)(BasketContainer);
