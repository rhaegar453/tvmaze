import { createAction } from '@reduxjs/toolkit';
import types from '../types';

const getShows = createAction(types.getShows.request);
const getShowsSuccess = createAction(types.getShows.success);
const getShowsFailure = createAction(types.getShows.failure);

const makeFavoriteAction = createAction(types.makeFavorite.request);
const removeFavoriteAction = createAction(types.removeFavorite.request);

export {
    getShows,
    getShowsSuccess,
    getShowsFailure,
    makeFavoriteAction,
    removeFavoriteAction
};
