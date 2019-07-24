import React from "react";
import { connect } from "react-redux";
import GameBoxList from "../../presentational/GameBoxList/GameBoxList";
import { deleteFoundGames } from "../../actions/games-actions";


class GameBoxListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleGames: this.props.games
        }
    }

    componentDidMount() {
        this.props.dispatch(deleteFoundGames());
    }

    componentWillReceiveProps(nextProps, nextContext) {
        setTimeout(() => this.setVisibleGames(), 1); /*ToDo*/
    }

    setVisibleGames() {
        this.props.foundGames.length !== 0 ? this.setState({visibleGames: this.props.foundGames}) :
            this.setState({visibleGames: this.props.games})
    }

    render() {
        return <GameBoxList games={this.state.visibleGames}/>
    }
}

const MapStateToProps = store => {
    return {
        games: store.gamesReducer.games,
        foundGames: store.gamesReducer.foundGames
    }
};

export default connect(MapStateToProps)(GameBoxListContainer);
