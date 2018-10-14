import { takeEvery, all } from 'redux-saga/effects';
import { toggleLightStatus } from './toggle'
import { listLights } from './init'

export function* allSaga(dispatch) {
    /*
    yield all([
        initSaga,
        toggleSaga
    ]);
    */
   console.log("allSaga called");
   yield takeEvery("INIT", listLights, dispatch);
   yield takeEvery("TOGGLE", toggleLightStatus);
   
}

export default allSaga;