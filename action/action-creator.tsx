import {
    RECEIVE_DISCIPLINES, RECEIVE_QUESTION,
    RECEIVE_QUESTIONS,
    REQUEST_DISCIPLINES,
    REQUEST_QUESTION,
    REQUEST_QUESTIONS, START_LOGIN,
} from '../util/constants';
import {Action, Credentials, Question} from "../component/Types";
import {NavigationStackProp} from "react-navigation-stack";

type Dispatch = (action: Action) => void

interface QuestionDto extends Question {

}

const startRequest = (items: string, dispatch: Dispatch) => {
    dispatch({
        type: items,
        payload: {},
    });
};

const token = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5YXVoZW5tYWxjaGFuYXVAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJleHAiOjE1OTM3MTk2MjAsImlhdCI6MTU5MzcwMTYyMH0.4tPYCt99pn98d_lw3aVJfxbNoMrnMVCuF6g1B6-TV-lhIVBnpw-n1Vr-SNKcbffMmdQLVBl0YTP80p8ASAHDPw';

export const fetchDisciplines = () => {
    console.log('call disciplines api')

    return async (dispatch: Dispatch) => {
        startRequest(REQUEST_DISCIPLINES, dispatch);

        //ToDo handle error (redirect to empty state)
        try {
            let response = await fetch('http://192.168.0.112:8080/disciplines', {
                headers: {
                    'Authorization': token
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
                'Authorization': token
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
                'Authorization': token
            },
        });
        let questionDetails = await response.json();
        dispatch({
            type: RECEIVE_QUESTION,
            payload: questionDetails,
        });
    };
};

export const logIn = (credentials: Credentials) => {
    return async (dispatch: Dispatch) => {
        startRequest(START_LOGIN, dispatch)
        let response = await fetch('http://192.168.0.112:8080/authentication', {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        console.log(response)
    }
}
