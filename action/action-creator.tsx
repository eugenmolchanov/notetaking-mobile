import {
    SUCCESS_LOGIN,
    RECEIVE_DISCIPLINES, RECEIVE_QUESTION,
    RECEIVE_QUESTIONS,
    REQUEST_DISCIPLINES,
    REQUEST_QUESTION,
    REQUEST_QUESTIONS, START_LOGIN, FAIL_LOGIN,
} from '../util/constants';
import {Action, Credentials, Question} from "../component/Types";
import {NavigationStackProp} from "react-navigation-stack";
import {AsyncStorage} from "react-native";

export type Dispatch = (action: Action) => void

const ACCESS_TOKEN_KEY = 'accessToken';

const getBearerToken = async () => {
    return 'Bearer ' + await AsyncStorage.getItem(ACCESS_TOKEN_KEY)
}

const startRequest = (type: string, dispatch: Dispatch) => {
    dispatch(action(type, {}));
};

export const action = (type: string, payload: any) => {
    return {
        type: type,
        payload: payload,
    }
}

export const fetchDisciplines = () => {
    return async (dispatch: Dispatch) => {
        startRequest(REQUEST_DISCIPLINES, dispatch);

        //ToDo handle error (redirect to empty state)
        try {
            let response = await fetch('http://192.168.0.112:8080/disciplines', {
                headers: {
                    'Authorization': await getBearerToken(),
                },
            });

            let data = await response.json();
            dispatch({
                type: RECEIVE_DISCIPLINES,
                payload: data,
            });
        } catch (e) {
            console.log(e.message + ' no!');
        }
    };
};

export const openDiscipline = (id: number, navigation: NavigationStackProp) => {
    console.log('call discipline api')
    return async (dispatch: Dispatch) => {
        startRequest(REQUEST_QUESTIONS, dispatch);
        navigation.navigate('Questions');
        let response = await fetch(`http://192.168.0.112:8080/disciplines/${id}/questions`, {
            headers: {
                'Authorization': await getBearerToken(),
            },
        });
        let questions = await response.json();
        dispatch({
            type: RECEIVE_QUESTIONS,
            payload: await questions,
        });
    };
};

export const openQuestion = (question: Question, navigation: NavigationStackProp) => {
    console.log('call question api')

    return async (dispatch: Dispatch) => {
        startRequest(REQUEST_QUESTION, dispatch);
        navigation.navigate('Question');
        console.log('add discipline id to question dto')
        let response = await fetch(`http://192.168.0.112:8080/disciplines/2/questions/${question.id}`, {
            headers: {
                'Authorization': await getBearerToken(),
            },
        });
        let questionDetails = await response.json();
        dispatch({
            type: RECEIVE_QUESTION,
            payload: questionDetails,
        });
    };
};

export const logIn = (credentials: Credentials, setErrorMessage: (mes: string) => void) => {
    return async (dispatch: Dispatch) => {
        startRequest(START_LOGIN, dispatch)
        let response = await fetch('http://192.168.0.112:8080/authentication', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const data = await response.json();

        if (response.status === 200) {
            await AsyncStorage.setItem(ACCESS_TOKEN_KEY, data.jwtToken)
            dispatch({
                type: SUCCESS_LOGIN,
                payload: data
            })
        } else if (response.status === 401) {
            setErrorMessage(data.message)
            dispatch({
                type: FAIL_LOGIN,
                payload: data
            })
        }
    }
}
