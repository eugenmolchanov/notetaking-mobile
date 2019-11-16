import { createStackNavigator } from 'react-navigation-stack';
import DisciplineListScreen from '../container/disciplines-container';
import QuestionListScreen from '../component/QuestionList';
import QuestionScreen from '../component/Question';

export default createStackNavigator({
        Disciplines: DisciplineListScreen,
        Questions: QuestionListScreen,
        Question: QuestionScreen,
    }, {
        initialRouteName: 'Disciplines',
    }
);
