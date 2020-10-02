import { createReducer, combineReducers } from '@reduxjs/toolkit';

import types from '../types';

/* import the reducers here and export them as default */

const initialState = {
    shows: [],
    favorites: [],
    loading: false
};

const appReducer = createReducer(initialState, {
    [types.getShows.request]: (state) => {
        console.log('Getting the user data');
        state.loading = true;
    },
    [types.getShows.success]: (state, action) => {
        console.log('Successfully got the user data ', action.payload);
        state.loading = false;
    },
    [types.getShows.failure]: (state, action) => {
        console.log(
            'Something went wrong while getting the user data ',
            action.payload
        );
        state.loading = false;
    }
});

const rootReducer = combineReducers({ app: appReducer });

export default rootReducer;
