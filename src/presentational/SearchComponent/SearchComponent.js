import React from "react";
import {connect} from "react-redux";
import "./SearchComponent.css";
import {setSearchState} from "../../actions/values-actions";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            inputStyle: "search-input"
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.searchState) {
            this.setState({searchText: ""})
        }
    }

    setValue = value => new Promise(resolve => resolve(
        this.props.searchGames(value),
        this.setState({searchText: value})
    ));

    inputHandling(value) {
        this.props.setSearchState(true);
        this.setValue(value)
            .then(() => this.state.searchText.length > 0 && this.props.foundGames.length === 0 ?
                this.setState({inputStyle: "search-input-not-found"}) :
                this.setState({inputStyle: "search-input"}));
    }

    render() {
        return (
            <div className="search-main">
                <h3 className="search-desc">Szukaj:</h3>
                <input className={this.state.inputStyle} type="text" value={this.state.searchText}
                       onChange={event => this.inputHandling(event.target.value)}
                       onBlur={() => {
                           this.setState({inputStyle: "search-input"});

                           if (this.props.foundGames.length === 0) {
                               this.setState({searchText: ""});
                           }

                           if (this.props.foundGames.length === this.props.games.length) {
                               this.props.setSearchState(false);
                           }
                       }}/>
            </div>
        )
    }
}

const MapStateToProps = store => {
    return {
        foundGames: store.gamesReducer.foundGames,
        searchState: store.valuesReducer.searchState,
        games: store.gamesReducer.games
    }
};

const MapDispatchToProps = dispatch => ({
    setSearchState: isTrue => dispatch(setSearchState(isTrue))
});
export default connect(MapStateToProps, MapDispatchToProps)(SearchComponent)

