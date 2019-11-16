import { createStackNavigator } from 'react-navigation-stack';
import DisciplineListScreen from '../container/disciplines-container';
import QuestionListScreen from '../component/navigator/stack/discipline/questions/QuestionList';
import QuestionScreen from '../component/navigator/stack/discipline/question/Question';

export default createStackNavigator({
        Disciplines: DisciplineListScreen,
        Questions: QuestionListScreen,
        Question: QuestionScreen,
    }, {
        initialRouteName: 'Disciplines',
    }
);
