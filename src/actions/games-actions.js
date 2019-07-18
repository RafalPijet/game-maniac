export const GET_GAME = "GET_GAME";
export const SEARCH_GAMES = "SEARCH_GAMES";

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
