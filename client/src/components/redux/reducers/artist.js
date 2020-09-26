import { ADDARTIST, ALLARTIST } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    data: {},
    loading: false,
    error: null,
};

const ADDARTIST_PENDING = `${ADDARTIST}_${ActionType.Pending}`;
const ADDARTIST_FULFILLED = `${ADDARTIST}_${ActionType.Fulfilled}`;
const ADDARTIST_REJECTED = `${ADDARTIST}_${ActionType.Rejected}`;

const ALLARTIST_PENDING = `${ALLARTIST}_${ActionType.Pending}`;
const ALLARTIST_FULFILLED = `${ALLARTIST}_${ActionType.Fulfilled}`;
const ALLARTIST_REJECTED = `${ALLARTIST}_${ActionType.Rejected}`;

const addArtistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDARTIST_PENDING:
        return {
            ...state,
            loading: true,
        };
        case ADDARTIST_FULFILLED:
        return {
            ...state,
            loading: false,
            data: action.payload,
        };
        case ADDARTIST_REJECTED:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

const allArtistReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALLARTIST_PENDING:
        return {
            ...state,
            loading: true,
        };
        case ALLARTIST_FULFILLED:
        return {
            ...state,
            loading: false,
            data: action.payload,
        };
        case ALLARTIST_REJECTED:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

export {addArtistReducer, allArtistReducer};
