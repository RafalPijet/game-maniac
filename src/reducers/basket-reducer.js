import {
    ADD_BASKET_GAME, DELETE_BASKET_GAME,
    UP_QUANTITY_OF_BASKET_GAME, DOWN_QUANTITY_OF_BASKET_GAME
} from "../actions/basket-actions";

const initialState = {
    basketGames: []
};

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET_GAME:
            return ({
                basketGames: [
                    {
                        game: action.game,
                        quantity: 1
                    },
                    ...state.basketGames
                ]
            });
        case DELETE_BASKET_GAME:
            const basketGamesAfterDeleted = state.basketGames.filter(game => game.id !== action.id);
            return ({...state, basketGames: basketGamesAfterDeleted});
        case UP_QUANTITY_OF_BASKET_GAME:
            return state.basketGames.map(game => {

                if (game.id === action.id) {
                    return {...game, quantity: game.quantity + 1}
                }
                return game;
            });
        case DOWN_QUANTITY_OF_BASKET_GAME:
            return state.basketGames.map(game => {

                if (game.id === action.id) {
                    return {...game, quantity: game.quantity - 1}
                }
                return game;
            });
        default:
            return state;
    }
};

export default basketReducer;
