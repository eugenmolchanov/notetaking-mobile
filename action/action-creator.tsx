import {
    RECEIVE_DISCIPLINES, RECEIVE_QUESTION,
    RECEIVE_QUESTIONS,
    REQUEST_DISCIPLINES,
    REQUEST_QUESTION,
    REQUEST_QUESTIONS,
} from '../util/constants';
import Realm from 'realm';
import LawSchemas from '../database.schema/schemas';
import {Action, Discipline, Question} from "../component/Types";
import {NavigationStackProp} from "react-navigation-stack";

type Dispatch = (action: Action) => void

interface DisciplineDto extends Discipline {
    questions: Array<QuestionDto>
    isFree: boolean
}

interface QuestionDto extends Question {

}

const requestItems = (items: string, dispatch: Dispatch) => {
    dispatch({
        type: items,
        payload: {},
    });
};

export const fetchDisciplines = () => {
    return async (dispatch: Dispatch) => {
        requestItems(REQUEST_DISCIPLINES, dispatch);

        //ToDo handle error (redirect to empty state)
        try {
            let realm = await Realm.open({ schema: LawSchemas });
            let disciplines = await realm.objects('Discipline');
            if (disciplines.isEmpty()) {
                let response = await fetch('http://192.168.100.7:8080/disciplines/access/free');

                let data = await response.json();
                try {
                    realm.write(() => {
                        data.forEach((discipline: DisciplineDto) => {
                            realm.create('Discipline', {
                                    id: discipline.id,
                                    name: discipline.name,
                                    abbreviation: discipline.abbreviation,
                                    freeAccess: discipline.isFree,
                                },
                                Realm.UpdateMode.All);


                            discipline.questions.forEach((question: QuestionDto) => {
                                question.contractions.forEach(contraction => {
                                    realm.create('Contraction', {
                                            id: contraction.id,
                                            name: contraction.name,
                                            description: contraction.description,
                                        },
                                        Realm.UpdateMode.All);
                                });

                                realm.create('Question', {
                                        id: question.id,
                                        name: question.name,
                                        number: question.number,
                                        disciplineId: discipline.id,
                                    },
                                    Realm.UpdateMode.All);

                                realm.create('QuestionContent', {
                                        questionId: question.id,
                                        fullContent: question.fullContent,
                                        shortContent: question.shortContent,
                                        contractions: question.contractions,
                                    },
                                    Realm.UpdateMode.All);
                            });
                        });
                    });
                } catch (e) {
                    console.log(e.message);
                }
            }

            dispatch({
                type: RECEIVE_DISCIPLINES,
                payload: realm.objects('Discipline'),
            });
        } catch (e) {
            console.log(e.message);
        }
    };
};

export const openDiscipline = (id: number, navigation: NavigationStackProp) => {
    return async (dispatch: Dispatch) => {
        requestItems(REQUEST_QUESTIONS, dispatch);
        navigation.navigate('Questions');
        let realm = await Realm.open({ schema: LawSchemas });
        dispatch({
            type: RECEIVE_QUESTIONS,
            payload: await realm.objects('Question').filtered(`disciplineId == ${id}`),
        });
    };
};

export const openQuestion = (question: Question, navigation: NavigationStackProp) => {
    return async (dispatch: Dispatch) => {
        requestItems(REQUEST_QUESTION, dispatch);
        navigation.navigate('Question');
        let realm = await Realm.open({ schema: LawSchemas });
        let questionContents = await realm.objects('QuestionContent').filtered(`questionId == ${question.id}`);
        const payload = questionContents.length ? Object.assign(question, {
            fullContent: questionContents[0].fullContent,
            shortContent: questionContents[0].shortContent,
            contractions: questionContents[0].contractions,
            }) : question;

        dispatch({
            type: RECEIVE_QUESTION,
            payload: payload,
        });
    };
};
