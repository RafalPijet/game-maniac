import React from "react";
import { connect } from "react-redux";
import { searchGames, addGames, deleteFoundGames, searchPlatform, deletePlatform } from "../../actions/games-actions";
import SearchComponent from "../../presentational/SearchComponent/SearchComponent";
import SortComponent from "../../presentational/SortComponent/SortComponent";

class SearchAndSortContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortType: "noSelect"
        }
    }

    compareNumbersInDown = (a, b) => {
        let comparison = 0;

        if (a.price > b.price) {
            comparison = -1;
        } else if (a.price < b.price) {
            comparison = 1;
        }
        return comparison;
    };

    compareNumbersInUp = (a, b) => {
        let comparison = 0;

        if (a.price < b.price) {
            comparison = -1;
        } else if (a.price > b.price) {
            comparison = 1;
        }
        return comparison;
    };

    compareLettersFromAToZ = (a, b) => {
        let comparison = 0;

        if (a.name < b.name) {
            comparison = -1;
        } else if (a.name > b.name) {
            comparison = 1;
        }
        return comparison;
    };

    compareLettersFromZToA = (a, b) => {
        let comparison = 0;

        if (a.name > b.name) {
            comparison = -1;
        } else if (a.name < b.name) {
            comparison = 1;
        }
        return comparison;
    };

    radioElementsHandling(id) {
        this.props.deleteFoundGames();
        this.setState({sortType: id});
        let unsorted = Array.from(this.props.games);
        let sorted = [];

        if (id === "downPrice") {
            sorted = unsorted.sort(this.compareNumbersInDown);
        } else if (id === "upPrice") {
            sorted = unsorted.sort(this.compareNumbersInUp);
        } else if (id === "aTOz") {
            sorted = unsorted.sort(this.compareLettersFromAToZ);
        } else if (id === "zTOa") {
            sorted = unsorted.sort(this.compareLettersFromZToA);
        } else {
            sorted = Array.from(this.props.games);
        }
        this.props.addGames([]);
        this.props.addGames(sorted);
    }

    checkboxElementsHandling(id, isChecked) {
        const useCheckboxes = () => new Promise(resolve => resolve(
            isChecked ? this.props.searchPlatform(id) : this.props.deletePlatform(id)
        ));

        useCheckboxes()
            .then(() => this.radioElementsHandling(this.state.sortType));
    }

    render() {
        return (
            <div>
                <SearchComponent searchGames={this.props.searchGames}/>
                <SortComponent checkboxElementsHandling={this.checkboxElementsHandling.bind(this)}
                               radioElementsHandling={this.radioElementsHandling.bind(this)}/>
            </div>
        )
    }
}

const MapStateToProps = store => {
    return {
        games: store.gamesReducer.games,
        foundGames: store.gamesReducer.foundGames,
        initialGames: store.gamesReducer.initialGames
    }
};

const MapDispatchToProps = dispatch => ({
    searchGames: searchText => dispatch(searchGames(searchText)),
    addGames: games => dispatch(addGames(games)),
    deleteFoundGames: () => dispatch(deleteFoundGames()),
    searchPlatform: platform => dispatch(searchPlatform(platform)),
    deletePlatform: platform => dispatch(deletePlatform(platform))
});

export default connect(MapStateToProps, MapDispatchToProps)(SearchAndSortContainer)
