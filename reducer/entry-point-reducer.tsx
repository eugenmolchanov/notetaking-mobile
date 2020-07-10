import {Action} from "../component/Types";
import {FAIL_LOGIN, START_LOGIN, SUCCESS_LOGIN} from "../util/constants";

const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
}

export default function (state = initialState, action: Action) {
    switch (action.type) {
        case START_LOGIN:
            return {
                isAuthenticated: false,
                isAuthenticating: true,
            };
        case SUCCESS_LOGIN:
            return {
                isAuthenticated: true,
                isAuthenticating: false,
            };
        case FAIL_LOGIN:
            return {
                isAuthenticated: false,
                isAuthenticating: false,
            };
        default:
            return state;
    }
}
