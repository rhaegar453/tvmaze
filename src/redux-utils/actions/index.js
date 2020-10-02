import { createAction } from '@reduxjs/toolkit';
import types from '../types';

const getStore = createAction(types.getShows.request);
const getStoreSuccess = createAction(types.getShows.success);
const getStoreFailure = createAction(types.getShows.failure);

export { getStore, getStoreSuccess, getStoreFailure };
