import { combineReducers } from "redux";
import gamesReducer from "./games-reducer";
import basketReducer from "./basket-reducer";
import valuesReducer from "./values-reducer";

const reducers = combineReducers({
    gamesReducer,
    basketReducer,
    valuesReducer
});

export default reducers;
