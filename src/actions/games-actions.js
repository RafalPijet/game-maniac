export const ADD_GAMES = "ADD_GAMES";
export const ADD_INITIAL_GAMES = "ADD_INITIAL_GAMES";
export const GET_GAME = "GET_GAME";
export const SEARCH_GAMES = "SEARCH_GAMES";
export const SEARCH_GAMES_BY_PLATFORMS = "SEARCH_GAMES_BY_PLATFORMS";
export const DELETE_GAMES_BY_PLATFORMS = "DELETE_GAMES_BY_PLATFORMS";
export const DELETE_FOUND_GAMES = "DELETE_FOUND_GAMES";

export const addGames = games => {
    return {
        type: ADD_GAMES,
        games
    }
};

export const addInitialGames = games => {
    return {
        type: ADD_INITIAL_GAMES,
        games
    }
};

export const getGame = id => {
    return {
        type: GET_GAME,
        id
    }
};

export const searchGames = searchText => {
    return {
        type: SEARCH_GAMES,
        searchText
    }
};

export const searchPlatform = platform => {
    return {
        type: SEARCH_GAMES_BY_PLATFORMS,
        platform
    }
};

export const deletePlatform = platform => {
    return {
        type: DELETE_GAMES_BY_PLATFORMS,
        platform
    }
};

export const deleteFoundGames = () => {
    return {
        type: DELETE_FOUND_GAMES
    }
};
