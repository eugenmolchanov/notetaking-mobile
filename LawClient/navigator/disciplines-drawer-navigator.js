import { createDrawerNavigator } from "react-navigation-drawer";
import DisciplinesStackNavigator from './disciplines-stack-navigator';

export default createDrawerNavigator({
    Home: DisciplinesStackNavigator,
}, {
    initialRouteName: 'Home',
    drawerPosition: 'right',
    drawerWidth: 300
});

