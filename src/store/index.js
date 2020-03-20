import { createStore} from 'redux';
// import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer/rootReducer';
// import rootSaga from "../sagas";

// const sagaMiddleware = createSagaMiddleware();
// const middleware = applyMiddleware(sagaMiddleware);

// const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    // reduxDevTools(
    //     middleware
    // )  
);

// sagaMiddleware.run(rootSaga);

export default store;