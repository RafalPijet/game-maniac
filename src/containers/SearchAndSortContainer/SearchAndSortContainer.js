import React from "react";
import {connect} from "react-redux";
import {searchGames, addGames} from "../../actions/games-actions";
import SearchComponent from "../../presentational/SearchComponent/SearchComponent";
import SortComponent from "../../presentational/SortComponent/SortComponent";

class SearchAndSortContainer extends React.Component {
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
        let unsorted = Array.from(this.props.initialGames);
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
            sorted = Array.from(this.props.initialGames);
        }
        this.props.addGames([]);
        this.props.addGames(sorted);
    }
    
    checkboxElementsHandling(id, isChecked) {
        console.log(id + " -> " + isChecked);
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
    addGames: games => dispatch(addGames(games))
});

export default connect(MapStateToProps, MapDispatchToProps)(SearchAndSortContainer)
