import React from 'react';
import DrawerItem from '../DrawerItem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

const contractionIcon = <Icon name={'text-format'} size={25}/>;

const navigateToScreen = (route, navigation, props) => () => {
    navigation.navigate(route, props);
    navigation.closeDrawer();
};

const DisciplinesDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'Дисциплины'}/>
    );
};

const QuestionsDrawerItems = (props) => {
    return (
        <DrawerItem onPress={navigateToScreen('Questions', props.navigation)} name={'Вопросы'}/>
    );
};

const QuestionDrawerItems = (props) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation, {
                contractions: props.contractions,
            })}
                        name={'Используемые сокращения'}
                        leftIcon={contractionIcon}/>
            <DrawerItem onPress={navigateToScreen('QuestionInBrief', props.navigation)} name={'Коротко по вопросу'}
                        leftIcon={contractionIcon}/>
        </View>
    );
};

const ContractionsDrawerItems = (props) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)} name={'К изучаемому вопросу'}/>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)} name={'К списку вопросов'}/>
            <DrawerItem onPress={navigateToScreen('Contractions', props.navigation)} name={'К списку дисциплин'}/>
        </View>
    );
};

export { DisciplinesDrawerItems, QuestionsDrawerItems, QuestionDrawerItems, ContractionsDrawerItems };
