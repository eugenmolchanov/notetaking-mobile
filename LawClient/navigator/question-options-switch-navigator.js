import { createSwitchNavigator } from 'react-navigation';
import ContractionListScreen from '../container/contractions-container';
import QuestionShortContentScreen from '../container/question-short-content-container';

const QuestionOptionsSwitchNavigator = createSwitchNavigator({
    Contractions: ContractionListScreen,
    QuestionShortContent: QuestionShortContentScreen,
});

export default QuestionOptionsSwitchNavigator;
