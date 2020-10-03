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
        state.loading = true;
    },
    [types.getShows.success]: (state, action) => {
        state.loading = false;
        state.shows = action.payload;
    },
    [types.getShows.failure]: (state, action) => {
        console.log(
            'Something went wrong while getting the user data ',
            action.payload
        );
        state.loading = false;
    },
    [types.makeFavorite.request]: (state, action) => {
        const currentFavorite = [];
        state.shows = state.shows.map((item) => {
            if (item.id === action.payload) {
                currentFavorite.push({ ...item, isFavorite: true });
                return currentFavorite[0];
            }
            return item;
        });
        state.favorites = [...state.favorites, currentFavorite[0]];
    },
    [types.removeFavorite.request]: (state, action) => {
        console.log('Removing from favorites ', action);
        state.shows = state.shows.map((item) => {
            if (item.id === action.payload) {
                return { ...item, isFavorite: false };
            }

            return item;
        });
        state.favorites = state.favorites.filter(
            (item) => item.id !== action.payload
        );
    }
});

const rootReducer = combineReducers({ app: appReducer });

export default rootReducer;
