import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';

const QuestionsDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Questions', props.navigation)} name={'Вопросы'}/>
    );
};

export default QuestionsDrawerItems;
