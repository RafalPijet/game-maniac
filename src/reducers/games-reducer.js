import { ADD_GAMES, ADD_INITIAL_GAMES, GET_GAME, SEARCH_GAMES, DELETE_FOUND_GAMES } from "../actions/games-actions";

const initialState = {
    games: [],
    selectedGame: {},
    foundGames: [],
    initialGames: []
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GAMES:
            return {...state, games: action.games};
        case ADD_INITIAL_GAMES:
            return {...state, initialGames: action.games};
        case GET_GAME:
            const selectedGame = state.games.find(game => game.id === action.id);
            return {...state, selectedGame};
        case SEARCH_GAMES:
            const foundGames = state.games.filter(game => game.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return {...state, foundGames};
        case DELETE_FOUND_GAMES:
            return {...state, foundGames: []};
        default:
            return state
    }
};

export default gamesReducer;
