import { RECEIVE_DISCIPLINES, REQUEST_ITEMS } from '../util/constants';

const initialState = {
    disciplines: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case REQUEST_ITEMS:
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
