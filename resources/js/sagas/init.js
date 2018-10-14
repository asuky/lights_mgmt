import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { setLight } from '../actions/actions';

function* getLightsList() {
    return axios({
        method: "get",
        url: "/list"
    });
}


export function* listLights(dispatch) {
    console.log("initSaga activated");
    console.log(dispatch);
    const response = yield call(getLightsList);
    response.then((response) => {
        dispatch(setLight(response.data));
    });
    
}

/*
export function* initSaga() {
    
}
*/

export default listLights;
