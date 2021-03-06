import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers";
// import counterReducer from "../reducers/counter";
import authReducer from "../reducers/auth";
import loginDetailReducer from "../reducers/loginDetail";
import userReducer from "../reducers/user";

import musicReducer from "../reducers/musics";
import transactionReducer from "../reducers/transactions";
import listTransactionReducer from "../reducers/listTransactions";
import updateTransactionReducer from "../reducers/updateTransaction";
import findTransactionUserReducer from "../reducers/findTransaction";

import { addArtistReducer, allArtistReducer} from "../reducers/artist";

import { forbiddenWordsMiddleware } from "../middleware";
import promise from "redux-promise-middleware";

// Global state
const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    music: musicReducer,
    artist: addArtistReducer,
    allArtist: allArtistReducer,
    transaction: transactionReducer,
    listTransaction: listTransactionReducer,
    updateTransaction : updateTransactionReducer,
    loginDetail: loginDetailReducer,
    find: findTransactionUserReducer
});

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, promise))
);

export default store;

// NO ACTIONS, NO CONSTANT FOLDER IN HERE BROO , OJOK LALI 