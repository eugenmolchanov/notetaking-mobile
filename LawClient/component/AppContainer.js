import { createDrawerNavigator } from 'react-navigation-drawer';
import Drawer from './navigator/Drawer';
import { createStackNavigator } from 'react-navigation-stack';
import DisciplineListScreen from './navigator/stack/disciplines/Disciplines';
import QuestionListScreen from './navigator/stack/disciplines/Questions';
import QuestionScreen from './navigator/stack/disciplines/Question';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ContractionListScreen from './navigator/switch/question.options/Contractions';
import QuestionShortContentScreen from './navigator/switch/question.options/QuestionShortContent';

const DisciplinesStackNavigator = createStackNavigator({
        Disciplines: DisciplineListScreen,
        Questions: QuestionListScreen,
        Question: QuestionScreen,
    }, {
        initialRouteName: 'Disciplines',
    }
);

const QuestionOptionsSwitchNavigator = createSwitchNavigator({
    Contractions: ContractionListScreen,
    QuestionShortContent: QuestionShortContentScreen,
});

const AppDrawerNavigator = createDrawerNavigator({
    DisciplinesStack: DisciplinesStackNavigator,
    QuestionSwitchOptions: QuestionOptionsSwitchNavigator,
}, {
    initialRouteName: 'DisciplinesStack',
    drawerPosition: 'right',
    drawerWidth: 300,
    contentComponent: Drawer,
});

export default createAppContainer(AppDrawerNavigator);

