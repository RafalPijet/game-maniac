import React from "react";
import {connect} from "react-redux";
import GameBoxDetails from "../../presentational/GameBoxDetails/GameBoxDetails";
import {getGame, addGames} from "../../actions/games-actions";
import gamesData from "../../data/games";

class GameBoxDetailsContainer extends React.Component {

    componentDidMount() {
        this.props.addGames(gamesData);
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
        selectedGame: store.gamesReducer.selectedGame,
        games: store.gamesReducer.games
    }
};

const MapDispatchToProps = dispatch => ({
    getGame: id => dispatch(getGame(id)),
    addGames: games => dispatch(addGames(games))
});

export default connect(MapStateToProps, MapDispatchToProps)(GameBoxDetailsContainer);
