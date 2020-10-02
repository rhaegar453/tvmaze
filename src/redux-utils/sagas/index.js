/* import the sagas here and export the default saga */
import { takeLatest, put, all } from 'redux-saga/effects';

import axios from 'axios';
import types from '../types';

import { getStoreFailure, getStoreSuccess } from '../actions/index';
import { getApi } from '../../utils/urls';

const watcherSaga = [takeLatest(types.getShows.request, getShowsWorker)];

function* getShowsWorker(action) {
    try {
        console.log(action);
        const uri = getApi('getShows');
        const { data } = yield axios.get(uri);
        console.log('This is the data from the server ', data);
        yield put(getStoreSuccess(data));
    } catch (err) {
        console.log('Something went wrong ', err);
        yield getStoreFailure(err);
    }
}

/* Creating the root Saga that watches over all applications */
function* rootSaga() {
    yield all([...watcherSaga]);
}

export default rootSaga;
