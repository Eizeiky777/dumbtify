import { FINDTRANSACTION } from "../constants/action-types";
import { ActionType } from "redux-promise-middleware";

const initialState = {
data: {},
loading: false,
error: null,
};

const FINDTRANSACTION_PENDING = `${FINDTRANSACTION}_${ActionType.Pending}`;
const FINDTRANSACTION_FULFILLED = `${FINDTRANSACTION}_${ActionType.Fulfilled}`;
const FINDTRANSACTION_REJECTED = `${FINDTRANSACTION}_${ActionType.Rejected}`;

const findTransactionUserReducer = (state = initialState, action) => {
switch (action.type) {
    case FINDTRANSACTION_PENDING:
    return {
        ...state,
        loading: true,
    };
    case FINDTRANSACTION_FULFILLED:
    return {
        ...state,
        loading: false,
        data: action.payload,
    };
    case FINDTRANSACTION_REJECTED:
    return {
        ...state,
        loading: false,
        error: action.payload,
    };
    default:
    return state;
}
};

export default findTransactionUserReducer;
