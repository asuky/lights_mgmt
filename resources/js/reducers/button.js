import { TOGGLE, REQUESTING, INIT, SET } from '../actions/actions';

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
                        disabled: "",
                        lightStatus: true,
                        label: "off"
                    });
                } else {
                    console.log("Turn Off");
                    return Object.assign({}, state, {
                        disabled: "",
                        lightStatus: false,
                        label: "on"
                    });
                }
                
            case REQUESTING:
                return Object.assign({}, state, {
                        disabled: "disabled",
                        label: "-----"
                    });
                    
            case INIT:
                return Object.assign({}, state, {
                    disabled: "disabled",
                    label: "-----"
                });
            
            case SET:
                return Object.assign({}, state, {
                            disabled: "",
                            label: "-----",
                            data: action.payload
                        });
                   
            default:
                console.log("Default");
                return state;
        }

}

export default button;