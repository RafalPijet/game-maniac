import {
    SET_PAGES_COUNT, SET_CURRENT_PAGE, SET_TOTAL, SET_DISCOUNT, SET_SEARCH_STATE, SET_TOTAL_TO_PAY,
    SET_SUMMARY_MODAL_STATE, SET_DISCOUNT_MODAL_STATE, SET_SUPPLY_COST,
    SET_DISCOUNT_IS_COUNTING, SET_AFTER_PAY_MODAL_STATE
} from "../actions/values-actions";

const initialState = {
    pagesCount: 0,
    currentPage: 0,
    total: 0,
    totalToPay: 0,
    discount: 0,
    supplyCost: 14.99,
    searchState: false,
    summaryModalState: false,
    discountModalState: false,
    afterPayModalState: false,
    discountIsCounting: false
};

const valuesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGES_COUNT:
            return {...state, pagesCount: action.value};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.value};
        case SET_TOTAL:
            return {...state, total: action.value};
        case SET_DISCOUNT:
            return {...state, discount: action.value};
        case SET_SEARCH_STATE:
            return {...state, searchState: action.isTrue};
        case SET_SUMMARY_MODAL_STATE:
            return {...state, summaryModalState: action.isTrue};
        case SET_DISCOUNT_MODAL_STATE:
            return {...state, discountModalState: action.isTrue};
        case SET_AFTER_PAY_MODAL_STATE:
            return {...state, afterPayModalState: action.isTrue};
        case SET_DISCOUNT_IS_COUNTING:
            return {...state, discountIsCounting: action.isTrue};
        case SET_SUPPLY_COST:
            return {...state, supplyCost: action.value};
        case SET_TOTAL_TO_PAY:
            return {...state, totalToPay: action.value};
        default:
            return state
    }
};

export default valuesReducer;
