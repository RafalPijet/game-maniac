import {
    ADD_BASKET_GAME, DELETE_BASKET_GAME, DELETE_ALL_BASKET_GAMES,
    UP_QUANTITY_OF_BASKET_GAME, DOWN_QUANTITY_OF_BASKET_GAME
} from "../actions/basket-actions";

const basketReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_BASKET_GAME:
            return (
                [
                    {
                        game: action.game,
                        quantity: 1
                    },
                    ...state]);
        case DELETE_BASKET_GAME:
            return state.filter(basketGame => basketGame.game.id !== action.id);
        case DELETE_ALL_BASKET_GAMES:
            return [];
        case UP_QUANTITY_OF_BASKET_GAME:
            return state.map(basketGame => {

                if (basketGame.game.id === action.id) {
                    return {...basketGame, quantity: basketGame.quantity + 1}
                }
                return basketGame;
            });
        case DOWN_QUANTITY_OF_BASKET_GAME:
            return state.map(basketGame => {

                if (basketGame.game.id === action.id) {
                    return {...basketGame, quantity: basketGame.quantity - 1}
                }
                return basketGame
            });
        default:
            return state;
    }
};

export default basketReducer;
