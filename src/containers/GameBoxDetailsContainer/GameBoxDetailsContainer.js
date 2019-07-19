import React from "react";
import { connect } from "react-redux";
import GameBoxDetails from "../../presentational/GameBoxDetails/GameBoxDetails";
import { getGame } from "../../actions/games-actions";

class GameBoxDetailsContainer extends React.Component {

    componentDidMount() {
        this.props.getGame(this.props.match.params.id);
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

const MapDispatchToProps = dispatch => ({
    getGame: id => dispatch(getGame(id)),
});

export default connect(MapStateToProps, MapDispatchToProps)(GameBoxDetailsContainer);
