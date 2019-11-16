import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';
import Icon from "react-native-vector-icons/MaterialIcons";

const questionsIcon = <Icon name={'format-list-numbered'} size={25}/>;

const QuestionsDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Questions', props.navigation)} name={'Вопросы'}
                leftIcon={questionsIcon}/>
    );
};

export default QuestionsDrawerItems;
