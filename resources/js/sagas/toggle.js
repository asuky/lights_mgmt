import { delay } from 'redux-saga';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { toggleLight } from '../actions/actions';

function* setLightStatus() {
    console.log("toggleLightStatus");
    
    return axios({
        method: "get",
        url: "/list"
    })
    .then((response) => {
        console.log(response);
    });

}

export function* toggleLightStatus() {
    //const response = yield call(setLightStatus);

}

export default toggleLightStatus;