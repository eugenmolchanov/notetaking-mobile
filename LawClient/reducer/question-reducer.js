import { RECEIVE_QUESTION, REQUEST_QUESTION } from '../util/constants';

const initialState = {
    question: {},
    contractions: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_QUESTION:
            return Object.assign({
                isFetching: true,
                question: {},
                contractions: [],
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