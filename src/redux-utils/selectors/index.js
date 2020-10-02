import { createSelector } from '@reduxjs/toolkit';

const getApp = (state) => state.app;

const getShowsSelector = createSelector([getApp], (state) => state.shows);
const getLoadingSelector = createSelector([getApp], (state) => state.loading);
const getFavoritesSelector = createSelector(
    [getApp],
    (state) => state.favorites
);

export { getShowsSelector, getLoadingSelector, getFavoritesSelector };
