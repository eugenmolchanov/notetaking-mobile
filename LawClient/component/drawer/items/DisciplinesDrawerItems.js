import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from './DrawerItemsUtils';

const DisciplinesDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'Дисциплины'}/>
    );
};

export default DisciplinesDrawerItems;
