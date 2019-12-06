import { createStackNavigator } from 'react-navigation-stack';
import DisciplineListScreen from '../container/disciplines-container';
import QuestionListScreen from '../container/questions-container';
import QuestionScreen from '../container/question-container';

export default createStackNavigator({
        Disciplines: DisciplineListScreen,
        Questions: QuestionListScreen,
        Question: QuestionScreen,
    }, {
        initialRouteName: 'Disciplines',
    }
);
