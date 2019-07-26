export const SET_PAGES_COUNT = "SET_PAGES_COUNT";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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
