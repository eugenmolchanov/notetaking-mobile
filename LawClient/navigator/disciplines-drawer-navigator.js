import { createDrawerNavigator } from "react-navigation-drawer";
import DisciplinesStackNavigator from './disciplines-stack-navigator';
import Drawer from "../component/Drawer";
import QuestionOptionsSwitchNavigator from "./question-options-switch-navigator";

export default createDrawerNavigator({
    Disciplines: DisciplinesStackNavigator,
    QuestionSwitchOptions: QuestionOptionsSwitchNavigator
}, {
    initialRouteName: 'Disciplines',
    drawerPosition: 'right',
    drawerWidth: 300,
    contentComponent: Drawer
});

