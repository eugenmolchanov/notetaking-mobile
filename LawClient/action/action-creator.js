import { RECEIVE_DISCIPLINES, REQUEST_DISCIPLINES } from "../util/constants";

export const fetchDisciplines = () => {
    return dispatch => {
        dispatch({
            type: REQUEST_DISCIPLINES,
            payload: {}
        });

        //ToDo handle error
        return fetch('http://192.168.0.101:8080/disciplines/free')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: RECEIVE_DISCIPLINES,
                    payload: data
                })
            }).catch(error => {
                console.log(error)
            })
    }
};