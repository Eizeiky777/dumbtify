import { MUSICS, ADDMUSICS,DELETEMUSIC, UPDATEMUSIC } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const MUSICS_PENDING = `${MUSICS}_${ActionType.Pending}`;
const MUSICS_FULFILLED = `${MUSICS}_${ActionType.Fulfilled}`;
const MUSICS_REJECTED = `${MUSICS}_${ActionType.Rejected}`;

const ADDMUSICS_PENDING = `${ADDMUSICS}_${ActionType.Pending}`;
const ADDMUSICS_FULFILLED = `${ADDMUSICS}_${ActionType.Fulfilled}`;
const ADDMUSICS_REJECTED = `${ADDMUSICS}_${ActionType.Rejected}`;

const DELETEMUSIC_PENDING = `${DELETEMUSIC}_${ActionType.Pending}`;
const DELETEMUSIC_FULFILLED = `${DELETEMUSIC}_${ActionType.Fulfilled}`;
const DELETEMUSIC_REJECTED = `${DELETEMUSIC}_${ActionType.Rejected}`;

const UPDATEMUSIC_PENDING = `${UPDATEMUSIC}_${ActionType.Pending}`;
const UPDATEMUSIC_FULFILLED = `${UPDATEMUSIC}_${ActionType.Fulfilled}`;
const UPDATEMUSIC_REJECTED = `${UPDATEMUSIC}_${ActionType.Rejected}`;

const musicReducer = (state = initialState, action) => {
switch (action.type) {
    case MUSICS_PENDING:
    case ADDMUSICS_PENDING:
    case DELETEMUSIC_PENDING:
    case UPDATEMUSIC_PENDING:
    return {
        ...state,
        loading: true,
    };
    case MUSICS_FULFILLED:
    case ADDMUSICS_FULFILLED:
    case DELETEMUSIC_FULFILLED:
    case UPDATEMUSIC_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case MUSICS_REJECTED:
    case ADDMUSICS_REJECTED:
    case DELETEMUSIC_REJECTED:
    case UPDATEMUSIC_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default musicReducer;
