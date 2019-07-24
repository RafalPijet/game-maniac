import { ADD_GAMES, ADD_INITIAL_GAMES, GET_GAME, SEARCH_GAMES, SEARCH_GAMES_BY_PLATFORMS,
        DELETE_GAMES_BY_PLATFORMS, DELETE_FOUND_GAMES } from "../actions/games-actions";

const initialState = {
    games: [],
    selectedGame: {},
    foundGames: [],
    initialGames: []
};

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_GAMES:
            return { ...state, games: action.games };
        case ADD_INITIAL_GAMES:
            return { ...state, initialGames: action.games };
        case GET_GAME:
            const selectedGame = state.games.find(game => game.id === action.id);
            return { ...state, selectedGame };
        case SEARCH_GAMES:
            const foundGames = state.games.filter(game => game.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return { ...state, foundGames };
        case SEARCH_GAMES_BY_PLATFORMS:
            const foundGamesByPlatform = state.games.filter(game => game.platform.includes(action.platform));
            return { ...state, foundGames: [...state.foundGames, ...foundGamesByPlatform] };
        case DELETE_GAMES_BY_PLATFORMS:
            const foundGamesAfterDelete = [];
            state.foundGames.forEach(foundGame => {
                if (!foundGame.platform.includes(action.platform)) {
                    foundGamesAfterDelete.push(foundGame);
                }
            });
            return { ...state, foundGames: foundGamesAfterDelete };
        case DELETE_FOUND_GAMES:
            return { ...state, foundGames: [] };
        default:
            return state
    }
};

export default gamesReducer;
