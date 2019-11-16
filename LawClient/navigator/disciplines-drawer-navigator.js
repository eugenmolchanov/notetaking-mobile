import { createDrawerNavigator } from 'react-navigation-drawer';
import DisciplinesStackNavigator from './disciplines-stack-navigator';
import Drawer from '../component/navigator/drawer/Drawer';
import QuestionOptionsSwitchNavigator from './question-options-switch-navigator';

export default createDrawerNavigator({
    DisciplinesStack: DisciplinesStackNavigator,
    QuestionSwitchOptions: QuestionOptionsSwitchNavigator,
}, {
    initialRouteName: 'DisciplinesStack',
    drawerPosition: 'right',
    drawerWidth: 300,
    contentComponent: Drawer,
});

