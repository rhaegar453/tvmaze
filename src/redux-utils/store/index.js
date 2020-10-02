import { configureStore } from '@reduxjs/toolkit';

/* Import the middlewares and reducers and sagas */
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

/* const store=configureStore({
    reducer:/* Root reducer here ,
    devTools:true,
    middleware:[/* Middlewares ]
})
*/

sagaMiddleware.run(/* Root Saga here */);
