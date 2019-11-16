import { createSwitchNavigator } from 'react-navigation';
import ContractionListScreen from '../component/ContractionList';
import QuestionInBriefScreen from '../component/QuestionInBrief';

const QuestionOptionsSwitchNavigator = createSwitchNavigator({
    Contractions: ContractionListScreen,
    QuestionInBrief: QuestionInBriefScreen,
});

export default QuestionOptionsSwitchNavigator;
