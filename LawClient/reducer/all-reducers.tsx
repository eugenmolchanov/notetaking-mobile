import { combineReducers } from 'redux';
import QuestionsReducer from './questions-reducer';
import QuestionReducer from './question-reducer';
import DisciplineReducer from './disciplines-reducer';

const allReducers = combineReducers({
    disciplines: DisciplineReducer,
    questions: QuestionsReducer,
    question: QuestionReducer,
});

export default allReducers;
