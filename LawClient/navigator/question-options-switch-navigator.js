import { createSwitchNavigator } from 'react-navigation';
import ContractionListScreen from '../component/navigator/switch/question.options/contractions/ContractionList';
import QuestionInBriefScreen from '../component/navigator/switch/question.options/short.content/QuestionShortContent';

const QuestionOptionsSwitchNavigator = createSwitchNavigator({
    Contractions: ContractionListScreen,
    QuestionInBrief: QuestionInBriefScreen,
});

export default QuestionOptionsSwitchNavigator;
