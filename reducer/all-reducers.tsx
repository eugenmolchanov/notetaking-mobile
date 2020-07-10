import { combineReducers } from 'redux';
import QuestionsReducer from './questions-reducer';
import QuestionReducer from './question-reducer';
import DisciplineReducer from './disciplines-reducer';
import EntryPointReducer from './entry-point-reducer';

const allReducers = combineReducers({
    disciplines: DisciplineReducer,
    questions: QuestionsReducer,
    question: QuestionReducer,
    entryPoint: EntryPointReducer,
});

export default allReducers;
