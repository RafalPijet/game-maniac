import React from "react";
import { connect } from "react-redux";
import GameBoxList from "../../presentational/GameBoxList/GameBoxList";

class GameBoxListContainer extends React.Component {
    render() {
        return <GameBoxList games={this.props.games}/>
    }
}

const MapStateToProps = store => {
    return {
        games: store.gamesReducer.games
    }
};

export default connect(MapStateToProps)(GameBoxListContainer);
