import { SET_PAGES_COUNT, SET_CURRENT_PAGE } from "../actions/values-actions";

const initialState = {
    pagesCount: 0,
    currentPage: 0
};

const valuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES_COUNT:
            return {...state, pagesCount: action.value};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.value};
        default:
           return  state
    }
};

export default valuesReducer;
