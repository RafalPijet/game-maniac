export const SET_PAGES_COUNT = "SET_PAGES_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const SET_TOTAL = "SET_TOTAL";
export const SET_SEARCH_STATE = "SET_SEARCH_STATE";

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

export const setSearchState = isTrue => {
    return {
        type: SET_SEARCH_STATE,
        isTrue
    }
};
