import React from "react";
import { connect } from "react-redux";
import GameBoxDetails from "../../presentational/GameBoxDetails/GameBoxDetails";
import { getGame } from "../../actions/games-actions";

class GameBoxDetailsContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(getGame(this.props.match.params.id));
    }

    render() {
        return (
            <GameBoxDetails game={this.props.selectedGame}/>
        )
    }
}

const MapStateToProps = store => {
    return {
        selectedGame: store.gamesReducer.selectedGame
    }
};

export default connect(MapStateToProps)(GameBoxDetailsContainer);
