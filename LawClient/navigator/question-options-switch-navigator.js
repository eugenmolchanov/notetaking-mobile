import { createSwitchNavigator } from 'react-navigation';
import ContractionListScreen from '../component/navigator/switch/question.options/contractions/ContractionList';
import QuestionShortContentScreen from '../component/navigator/switch/question.options/short.content/QuestionShortContent';

const QuestionOptionsSwitchNavigator = createSwitchNavigator({
    Contractions: ContractionListScreen,
    QuestionShortContent: QuestionShortContentScreen,
});

export default QuestionOptionsSwitchNavigator;
