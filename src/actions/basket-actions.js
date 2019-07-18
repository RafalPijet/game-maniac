export const ADD_BASKET_GAME = "ADD_BASKET_GAME";
export const DELETE_BASKET_GAME = "DELETE_BASKET_GAME";
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

export const upQuantity = () => {
    return {
        type: UP_QUANTITY_OF_BASKET_GAME
    }
};

export const downQuantity = () => {
    return {
        type: DOWN_QUANTITY_OF_BASKET_GAME
    }
};
