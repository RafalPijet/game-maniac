import React from "react";
import {connect} from "react-redux";
import GameBoxList from "../../presentational/GameBoxList/GameBoxList";
import {deleteFoundGames} from "../../actions/games-actions";
import {setPagesCount, setCurrentPage} from "../../actions/values-actions";


class GameBoxListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleGames: this.props.games
        }
    }

    componentDidMount() {
        this.props.deleteFoundGames();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setVisibleGames(nextProps.foundGames, nextProps.games)
    }

    setVisibleGames(foundGames, games) {
        foundGames.length !== 0 ? this.setState({visibleGames: foundGames}) :
            this.setState({visibleGames: games})
    }

    render() {
        return <GameBoxList games={this.state.visibleGames} pagesCount={this.props.pagesCount}
                            currentPage={this.props.currentPage} setPagesCount={this.props.setPagesCount}
                            setCurrentPage={this.props.setCurrentPage} searchState={this.props.searchState}/>
    }
}

const MapStateToProps = store => {
    return {
        games: store.gamesReducer.games,
        foundGames: store.gamesReducer.foundGames,
        pagesCount: store.valuesReducer.pagesCount,
        currentPage: store.valuesReducer.currentPage,
        searchState: store.valuesReducer.searchState
    }
};

const MapDispatchToProps = dispatch => ({
    deleteFoundGames: () => dispatch(deleteFoundGames()),
    setPagesCount: value => dispatch(setPagesCount(value)),
    setCurrentPage: value => dispatch(setCurrentPage(value))
});

export default connect(MapStateToProps, MapDispatchToProps)(GameBoxListContainer);
