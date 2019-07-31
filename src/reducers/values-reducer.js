import { SET_PAGES_COUNT, SET_CURRENT_PAGE, SET_TOTAL, SET_SEARCH_STATE,
        SET_SUMMARY_MODAL_STATE} from "../actions/values-actions";

const initialState = {
    pagesCount: 0,
    currentPage: 0,
    total: 0,
    searchState: false,
    summaryModalState: false
};

const valuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES_COUNT:
            return {...state, pagesCount: action.value};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.value};
        case SET_TOTAL:
            return {...state, total: action.value};
        case SET_SEARCH_STATE:
            return {...state, searchState: action.isTrue};
        case SET_SUMMARY_MODAL_STATE:
            return {...state, summaryModalState: action.isTrue};
        default:
           return  state
    }
};

export default valuesReducer;
