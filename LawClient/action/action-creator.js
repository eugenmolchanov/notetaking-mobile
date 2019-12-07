import {
    RECEIVE_DISCIPLINES, RECEIVE_QUESTION,
    RECEIVE_QUESTIONS,
    REQUEST_DISCIPLINES,
    REQUEST_QUESTION,
    REQUEST_QUESTIONS
} from '../util/constants';
import Realm from 'realm';
import LawSchemas from '../database.schema/LawSchemas';

const requestItems = (items, dispatch) => {
    dispatch({
        type: items,
        payload: {},
    });
};

export const fetchDisciplines = () => {
    return async dispatch => {
        requestItems(REQUEST_DISCIPLINES, dispatch);

        //ToDo handle error (redirect to empty state)
        try {
            let realm = await Realm.open({ schema: LawSchemas });
            Realm.deleteFile({ schema: LawSchemas });
            if (!Realm.schemaVersion(Realm.defaultPath)) {
                let response = await fetch('http://192.168.100.7:8080/disciplines/access/free');

                let data = await response.json();
                try {
                    realm.write(() => {
                        data.forEach(discipline => {
                            realm.create('Discipline', {
                                    id: discipline.id,
                                    name: discipline.name,
                                    abbreviation: discipline.abbreviation,
                                    freeAccess: discipline.isFree,
                                },
                                Realm.UpdateMode.All);


                            discipline.questions.forEach(question => {
                                question.contractions.forEach(contraction => {
                                    realm.create('Contraction', {
                                            id: contraction.id,
                                            name: contraction.name,
                                            description: contraction.description,
                                        },
                                        Realm.UpdateMode.All)
                                });

                                realm.create('Question', {
                                        id: question.id,
                                        name: question.name,
                                        number: question.number,
                                        fullContent: question.fullContent,
                                        shortContent: question.shortContent,
                                        disciplineId: discipline.id,
                                        contractions: question.contractions,
                                    },
                                    Realm.UpdateMode.All);
                            })
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

export const openDiscipline = (id, navigation) => {
    return async dispatch => {
        requestItems(REQUEST_QUESTIONS, dispatch);
        navigation.navigate('Questions');
        let realm = await Realm.open({ schema: LawSchemas });
        dispatch({
            type: RECEIVE_QUESTIONS,
            payload: await realm.objects('Question').filtered(`disciplineId == ${id}`),
        })
    }
};

export const openQuestion = (question, navigation) => {
    return async dispatch => {
        requestItems(REQUEST_QUESTION, dispatch);
        navigation.navigate('Question');
        dispatch({
            type: RECEIVE_QUESTION,
            payload: question,
        })
    }
};
