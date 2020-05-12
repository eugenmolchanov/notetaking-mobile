import { RECEIVE_QUESTION, REQUEST_QUESTION } from '../util/constants';
import {Action} from "../component/Types";

const initialState = {
    question: {},
    isFetching: true,
};

export default function (state = initialState, action: Action) {
    switch (action.type) {
        case REQUEST_QUESTION:
            return Object.assign({
                isFetching: true,
                question: {},
            });
        case RECEIVE_QUESTION:
            return Object.assign({
                isFetching: false,
                question: action.payload,
            });
        default:
            return state;
    }
}
