export const TOGGLE='TOGGLE';
export const REQUESTING='REQUESTING';

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
