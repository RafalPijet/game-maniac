import { combineReducers } from "redux";
import gamesReducer from "./games-reducer";
import basketReducer from "./basket-reducer";

const reducers = combineReducers({
    gamesReducer,
    basketReducer
});

export default reducers;
