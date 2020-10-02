import { configureStore } from '@reduxjs/toolkit';

/* Import the middlewares and reducers and sagas */
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware, logger]
});

sagaMiddleware.run(rootSaga);

export default store;
