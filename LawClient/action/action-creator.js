import { RECEIVE_DISCIPLINES, RECEIVE_QUESTIONS, REQUEST_ITEMS } from '../util/constants';
import Realm from 'realm';
import LawSchemas from '../database.schema/LawSchemas';

const requestItems = (dispatch) => {
    dispatch({
        type: REQUEST_ITEMS,
        payload: {},
    });
};

export const fetchDisciplines = () => {
    return async dispatch => {
        requestItems(dispatch);

        //ToDo handle error (redirect to empty state)
        try {
            let realm = await Realm.open({ schema: LawSchemas });
            if (!Realm.schemaVersion(Realm.defaultPath)) {
                let response = await fetch('http://192.168.99.112:8080/disciplines/access/free');

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

export const openDiscipline = (disciplineId) => {
    return async dispatch => {
        requestItems(dispatch);
        let realm = Realm.open({schema: LawSchemas});
        dispatch({
            type: RECEIVE_QUESTIONS,
            payload: await realm.objects('Question').filtered(`discipline.id == ${disciplineId}`),
        })
    }
};
