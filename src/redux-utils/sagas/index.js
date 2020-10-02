/* import the sagas here and export the default saga */
import { takeLatest, put, all } from 'redux-saga/effects';

import axios from 'axios';
import types from '../types';

import { getShowsFailure, getShowsSuccess } from '../actions/index';
import { getApi } from '../../utils/urls';

const watcherSaga = [takeLatest(types.getShows.request, getShowsWorker)];

function* getShowsWorker(action) {
    try {
        console.log(action);
        const uri = getApi('getShows');
        let { data } = yield axios.get(uri);
        console.log('This is the data from the server ', data);
        data = data.map((item) => ({ ...item, isFavorite: false }));
        yield put(getShowsSuccess(data));
    } catch (err) {
        console.log('Something went wrong ', err);
        yield getShowsFailure(err);
    }
}

/* Creating the root Saga that watches over all applications */
function* rootSaga() {
    yield all([...watcherSaga]);
}

export default rootSaga;
