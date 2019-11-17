import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as PropTypes from 'prop-types';

const disciplinesIcon = <Icon name={'format-list-bulleted'} size={25}/>;


const DisciplinesDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'К списку дисциплин'}
                leftIcon={disciplinesIcon}/>
    );
};

DisciplinesDrawerItems.propTypes = {
    navigation: PropTypes.object,
};

export default DisciplinesDrawerItems;
