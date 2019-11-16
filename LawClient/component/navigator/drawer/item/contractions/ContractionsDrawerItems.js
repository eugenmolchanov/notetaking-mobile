import { View } from 'react-native';
import DrawerItem from '../DrawerItem';
import React from 'react';
import { navigateToScreen } from '../DrawerItemUtils';

const ContractionsDrawerItems = (props) => {
    return (
        <View>
            <DrawerItem onPress={navigateToScreen('Question', props.navigation)} name={'К изучаемому вопросу'}/>
            <DrawerItem onPress={navigateToScreen('Questions', props.navigation)} name={'К списку вопросов'}/>
            <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'К списку дисциплин'}/>
            <DrawerItem onPress={navigateToScreen('Disciplines', props.navigation)} name={'О данной функции приложения'}/>
        </View>
    );
};

export default ContractionsDrawerItems;
