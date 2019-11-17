import { View } from 'react-native';
import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as PropTypes from 'prop-types';

const questionIcon = <Icon name={'help-outline'} size={25}/>;
const questionsIcon = <Icon name={'format-list-numbered'} size={25}/>;
const disciplinesIcon = <Icon name={'format-list-bulleted'} size={25}/>;
const functionIcon = <Icon name={'announcement'} size={25}/>;

const ContractionsDrawerItems = (props) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Question', props.navigation)} name={'К изучаемому вопросу'}
                        leftIcon={questionIcon}/>
            <DrawerItem onPress={navigateToScreen('Questions', props.navigation)} name={'К списку вопросов'}
                        leftIcon={questionsIcon}/>
            <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'К списку дисциплин'}
                        leftIcon={disciplinesIcon}/>
            <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)}
                        name={'О данной функции приложения'}
                        leftIcon={functionIcon}/>
        </View>
    );
};

ContractionsDrawerItems.propTypes = {
    navigation: PropTypes.object,
};

export default ContractionsDrawerItems;
