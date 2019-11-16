import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';
import Icon from "react-native-vector-icons/MaterialIcons";

const disciplinesIcon = <Icon name={'format-list-bulleted'} size={25}/>;


const DisciplinesDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'Дисциплины'}
                leftIcon={disciplinesIcon}/>
    );
};

export default DisciplinesDrawerItems;
