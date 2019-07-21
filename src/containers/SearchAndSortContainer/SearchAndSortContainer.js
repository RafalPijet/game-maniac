import React from "react";
import { connect } from "react-redux";
import { searchGames } from "../../actions/games-actions";
import SearchComponent from "../../presentational/SearchComponent/SearchComponent";
import SortComponent from "../../presentational/SortComponent/SortComponent";

class SearchAndSortContainer extends React.Component {

    render() {
        return (
            <div>
                <SearchComponent searchGames={this.props.searchGames}/>
                <SortComponent/>
            </div>
        )
    }
}

const MapStateToProps = store => {
    return {
        games: store.gamesReducer.games,
        foundGames: store.gamesReducer.foundGames
    }
};

const MapDispatchToProps = dispatch => ({
    searchGames: searchText => dispatch(searchGames(searchText))
});

export default connect(MapStateToProps, MapDispatchToProps)(SearchAndSortContainer)
