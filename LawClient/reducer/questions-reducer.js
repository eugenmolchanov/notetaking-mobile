import { RECEIVE_QUESTIONS, REQUEST_QUESTIONS } from '../util/constants';

const initialState = {
    questions: {},
    isFetching: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_QUESTIONS:
            return Object.assign({
                isFetching: true,
                questions: [],
            }, state);
        case RECEIVE_QUESTIONS:
            return Object.assign({
                isFetching: false,
            }, {
                questions: action.payload,
            });
        default:
            return state;
    }
}
