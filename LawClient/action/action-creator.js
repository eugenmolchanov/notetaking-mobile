import { RECEIVE_DISCIPLINES, REQUEST_DISCIPLINES } from "../util/constants";

export const fetchDisciplines = () => {
    return async dispatch => {
        dispatch({
            type: REQUEST_DISCIPLINES,
            payload: {}
        });

        //ToDo handle error (redirect to empty state)
        try {
            let response = await fetch('http://192.168.0.103:8080/disciplines/access/free');
            let data = await response.json();
            dispatch({
                type: RECEIVE_DISCIPLINES,
                payload: data
            });
        } catch (e) {
            console.log(e.message)
        }
    }
};