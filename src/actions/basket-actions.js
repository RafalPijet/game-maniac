export const ADD_BASKET_GAME = "ADD_BASKET_GAME";
export const DELETE_BASKET_GAME = "DELETE_BASKET_GAME";
export const DELETE_ALL_BASKET_GAMES = "DELETE_ALL_BASKET_GAMES";
export const UP_QUANTITY_OF_BASKET_GAME = "UP_QUANTITY_OF_BASKET_GAME";
export const DOWN_QUANTITY_OF_BASKET_GAME = "DOWN_QUANTITY_OF_BASKET_GAME";

export const addGame = game => {
    return {
        type: ADD_BASKET_GAME,
        game
    }
};

export const deleteGame = id => {
    return {
        type: DELETE_BASKET_GAME,
        id
    }
};

export const deleteAllGames = () => {
    return {
        type: DELETE_ALL_BASKET_GAMES
    }
};

export const upQuantity = id => {
    return {
        type: UP_QUANTITY_OF_BASKET_GAME,
        id
    }
};

export const downQuantity = id => {
    return {
        type: DOWN_QUANTITY_OF_BASKET_GAME,
        id
    }
};
