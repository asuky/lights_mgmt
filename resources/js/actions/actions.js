export const TOGGLE='TOGGLE';
export const REQUESTING='REQUESTING';
export const INIT='INIT';
export const SET='SET';

export function toggleLight() {
    return {
        type: TOGGLE
    }
}

export function requesting() {
    return {
        type: REQUESTING
    }
}

export function initLight() {
    return {
        type: INIT
    }
}

export function setLight(data) {
    return {
        type: SET,
        payload: data
    }
}

/*
export const TURNON= 'TURNON';
export const TURNOFF='TURNOFF';

export function turnOn() {
    return {
        type: TURNON,
        label: 'off'
    }
}

export function turnOff() {
    return {
        type: TURNOFF,
        label: 'on'
    }
}
*/
