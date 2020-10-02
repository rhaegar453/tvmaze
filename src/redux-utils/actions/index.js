import { createAction } from '@reduxjs/toolkit';
import types from '../types';

const getShows = createAction(types.getShows.request);
const getShowsSuccess = createAction(types.getShows.success);
const getShowsFailure = createAction(types.getShows.failure);

export { getShows, getShowsSuccess, getShowsFailure };
