import { RECEIVE_DISCIPLINES, REQUEST_DISCIPLINES } from '../util/constants';

const initialState = {
    disciplines: {},
    isFetching: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_DISCIPLINES:
            return Object.assign({
                isFetching: true,
            }, state);
        case RECEIVE_DISCIPLINES:
            return Object.assign({
                isFetching: false,
            }, {
                disciplines: action.payload,
            });
        default:
            return state;
    }
}
