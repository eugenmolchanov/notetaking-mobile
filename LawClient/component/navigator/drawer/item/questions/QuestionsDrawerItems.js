import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as PropTypes from 'prop-types';

const questionsIcon = <Icon name={'format-list-numbered'} size={25}/>;

const QuestionsDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Questions', props.navigation)} name={'Вопросы'}
                leftIcon={questionsIcon}/>
    );
};

QuestionsDrawerItems.propTypes = {
    navigation: PropTypes.object,
};

export default QuestionsDrawerItems;
