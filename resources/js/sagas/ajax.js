import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* requestLight(action) {
    yield call(console.log, "Saga recited");
    yield put({type: "TOGGLE"});
}

export function* ajaxSaga() {
    yield takeEvery("REQUESTING", requestLight);
}

export default ajaxSaga;