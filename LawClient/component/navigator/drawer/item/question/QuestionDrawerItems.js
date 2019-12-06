import { View } from 'react-native';
import DrawerItem from '../DrawerItem';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { navigateToScreen } from '../DrawerItemUtils';

const contractionIcon = <Icon name={'text-format'} size={25}/>;
const questionShortContentIcon = <Icon name={'description'} size={25}/>;

const QuestionDrawerItems = (props) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)}
                        name={'Используемые сокращения'}
                        leftIcon={contractionIcon}/>
            <DrawerItem onPress={navigateToScreen('QuestionShortContent', props.navigation)}
                        name={'Коротко по вопросу'}
                        leftIcon={questionShortContentIcon}/>
        </View>
    );
};

export default QuestionDrawerItems;

