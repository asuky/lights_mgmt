import { TOGGLE, toggleLight } from '../actions/actions';

let initialState = {
    lightStatus: false,
    label: "off"
}

export function button (state = initialState, action) {
        console.log("Button Reducer passed");
        console.log("Action: " + action.type);
        switch (action.type) {
            
            case TOGGLE:
                if (!state.lightStatus) {
                    console.log("Turn On");
                    return Object.assign({}, state, {
                        lightStatus: true,
                        label: "off"
                    });
                } else {
                    console.log("Turn Off");
                    return Object.assign({}, state, {
                        lightStatus: false,
                        label: "on"
                    });
                }
                
            default:
                console.log("Default");
                return state;
        }
}

export default button;