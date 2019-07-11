import {GET_GAMES, GET_GAME, SEARCH_GAMES} from "../actions/games-actions";
import gamesData from "../data/games";

const initialState = {
    games: gamesData
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAMES:
            return {...state, games: state.games};
        case GET_GAME:
            const selectedGame = state.games.find(game => game.id === action.id);
            return {...state, selectedGame};
        case SEARCH_GAMES:
            const foundGames = state.games.filter(game => game.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return {...state, foundGames}
        default:
            return state
    }
};

export default gamesReducer;
