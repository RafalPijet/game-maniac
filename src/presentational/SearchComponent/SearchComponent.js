import React from "react";
import {connect} from "react-redux";
import "./SearchComponent.css";

class SearchComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            inputStyle: "search-input"
        }
    }
    inputHandling(value) {
        const setValue = () => new Promise(resolve => resolve(
            this.props.searchGames(value),
            this.setState({searchText: value})
        ));
        setValue()
            .then(() => this.state.searchText.length > 0 && this.props.foundGames.length === 0 ?
                    this.setState({inputStyle: "search-input-not-found"}) :
                    this.setState({inputStyle: "search-input"}));
    }
    render() {
        return (
            <div className="search-main">
                <h3>Szukaj:</h3>
                <input className={this.state.inputStyle} type="text"
                       onChange={event => this.inputHandling(event.target.value)}
                       onBlur={event => {
                           event.target.value = "";
                           this.setState({inputStyle: "search-input"});
                       }}/>
            </div>
        )
    }
}
const MapStateToProps = store => {
    return {
        foundGames: store.gamesReducer.foundGames
    }
};
export default connect(MapStateToProps)(SearchComponent)

