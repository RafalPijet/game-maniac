export const SET_PAGES_COUNT = "SET_PAGES_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL = "SET_TOTAL";
export const SET_DISCOUNT = "SET_DISCOUNT";
export const SET_SEARCH_STATE = "SET_SEARCH_STATE";
export const SET_SUMMARY_MODAL_STATE = "SET_SUMMARY_MODAL_STATE";
export const SET_DISCOUNT_MODAL_STATE = "SET_DISCOUNT_MODAL_STATE";
export const SET_SUPPLY_COST = "SET_SUPPLY_COST";

export const setPagesCount = value => {
    return {
        type: SET_PAGES_COUNT,
        value
    }
};
export const setCurrentPage = value => {
    return {
        type: SET_CURRENT_PAGE,
        value
    }
};

export const setTotal = value => {
    return {
        type: SET_TOTAL,
        value
    }
};

export const setDiscount = value => {
    return {
        type: SET_DISCOUNT,
        value
    }
};

export const setSearchState = isTrue => {
    return {
        type: SET_SEARCH_STATE,
        isTrue
    }
};

export const setSummaryModalState = isTrue => {
    return {
        type: SET_SUMMARY_MODAL_STATE,
        isTrue
    }
};

export const setDiscountModalState = isTrue => {
    return {
        type: SET_DISCOUNT_MODAL_STATE,
        isTrue
    }
};

export const setSupplyCost = value => {
    return {
        type: SET_SUPPLY_COST,
        value
    }
};
